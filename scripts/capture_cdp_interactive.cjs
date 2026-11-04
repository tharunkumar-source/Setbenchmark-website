const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\957d98c9-4c11-432f-acae-ba818e5c0423';
const userDataDir = path.join(brainDir, 'edge_cdp_temp2');

const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];
const edgePath = edgePaths.find(p => fs.existsSync(p));

async function main() {
  const edgeProc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9226',
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,1100',
    'http://localhost:3000/'
  ]);

  try {
    let targetWs = null;
    for (let i = 0; i < 20; i++) {
      await new Promise(r => setTimeout(r, 300));
      try {
        const res = await fetch('http://localhost:9226/json');
        const list = await res.json();
        const tab = list.find(t => t.url.includes('localhost:3000')) || list[0];
        if (tab && tab.webSocketDebuggerUrl) {
          targetWs = tab.webSocketDebuggerUrl;
          break;
        }
      } catch (e) {}
    }

    const ws = new WebSocket(targetWs);
    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (callbacks.has(msg.id)) {
        const cb = callbacks.get(msg.id);
        callbacks.delete(msg.id);
        cb(msg.result, msg.error);
      }
    };

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        callbacks.set(msgId, (result, err) => {
          if (err) reject(err);
          else resolve(result);
        });
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await send('Page.enable');
    await send('DOM.enable');
    await send('Runtime.enable');
    await new Promise(r => setTimeout(r, 1500));

    async function captureElement(filename) {
      const evalBox = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const el = document.querySelector('.feature-accordion-section');
            if (!el) return null;
            const r = el.getBoundingClientRect();
            return {
              x: Math.round(r.x + window.scrollX),
              y: Math.round(r.y + window.scrollY),
              width: Math.round(r.width),
              height: Math.round(r.height)
            };
          })()
        `,
        returnByValue: true
      });
      const box = evalBox.result.value;
      console.log('Capture element box:', box);

      const res = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true,
        clip: {
          x: box.x,
          y: box.y,
          width: box.width,
          height: box.height,
          scale: 1
        }
      });
      const buf = Buffer.from(res.data, 'base64');
      const outPath = path.join(brainDir, filename);
      fs.writeFileSync(outPath, buf);
      console.log(`Saved screenshot ${filename} (${buf.length} bytes)`);
    }

    // Capture tab 0 (AI Fluency)
    await captureElement('feature_tab0_ai_fluency.png');

    // Click Tab 1 (Integrity)
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btns = document.querySelectorAll('.feature-accordion-btn');
          if (btns[1]) btns[1].click();
        })()
      `
    });
    await new Promise(r => setTimeout(r, 800));
    await captureElement('feature_tab1_integrity.png');

    // Click Tab 2 (Decisions)
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btns = document.querySelectorAll('.feature-accordion-btn');
          if (btns[2]) btns[2].click();
        })()
      `
    });
    await new Promise(r => setTimeout(r, 800));
    await captureElement('feature_tab2_decisions.png');

    ws.close();
  } finally {
    edgeProc.kill();
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
