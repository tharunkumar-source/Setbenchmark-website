const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\957d98c9-4c11-432f-acae-ba818e5c0423';
const userDataDir = path.join(brainDir, 'edge_cdp_editorial_test');

const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];
const edgePath = edgePaths.find(p => fs.existsSync(p));

async function main() {
  const edgeProc = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9227',
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,1100',
    'http://localhost:3000/'
  ]);

  try {
    let targetWs = null;
    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 300));
      try {
        const res = await fetch('http://localhost:9227/json');
        const list = await res.json();
        const tab = list.find(t => t.url.includes('localhost:3000')) || list[0];
        if (tab && tab.webSocketDebuggerUrl) {
          targetWs = tab.webSocketDebuggerUrl;
          break;
        }
      } catch (e) {}
    }

    if (!targetWs) {
      console.error('Could not connect to Edge WebSocket');
      edgeProc.kill();
      return;
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
    await new Promise(r => setTimeout(r, 2000));

    async function captureElement(filename) {
      const evalBox = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const el = document.querySelector('.editorial-carousel-section');
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
      if (!box) {
        console.error('Could not find .editorial-carousel-section');
        return;
      }
      console.log('Capture element box for', filename, ':', box);

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
      fs.writeFileSync(path.join(brainDir, filename), Buffer.from(res.data, 'base64'));
      console.log('Saved', filename);
    }

    // 1. Capture All Features (9 cards)
    await captureElement('editorial_tab_all_9.png');

    // 2. Click Ecosystem & Scale (3 cards)
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btns = Array.from(document.querySelectorAll('.editorial-filter-btn'));
          const btn = btns.find(b => b.textContent.includes('Ecosystem'));
          if (btn) btn.click();
        })()
      `
    });
    await new Promise(r => setTimeout(r, 800));
    await captureElement('editorial_tab_ecosystem_3.png');

    // 3. Click Evaluation (3 cards)
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btns = Array.from(document.querySelectorAll('.editorial-filter-btn'));
          const btn = btns.find(b => b.textContent.includes('Evaluation'));
          if (btn) btn.click();
        })()
      `
    });
    await new Promise(r => setTimeout(r, 800));
    await captureElement('editorial_tab_evaluation_3.png');

    ws.close();
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    edgeProc.kill();
  }
}

main();
