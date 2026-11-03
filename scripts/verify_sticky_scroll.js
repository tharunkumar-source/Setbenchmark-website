import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const msedgePath = fs.existsSync("C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe")
  ? "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
  : "C:/Program Files/Microsoft/Edge/Application/msedge.exe";

const outDir = "C:/Users/Admin/.gemini/antigravity/brain/957d98c9-4c11-432f-acae-ba818e5c0423";

function r(str) { return str; }

async function main() {
  const edge = spawn(msedgePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    '--window-size=1440,900',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;
    console.log('Connecting to Edge WS:', wsUrl);

    const ws = new WebSocket(wsUrl);
    let id = 1;
    const pending = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        pending.get(msg.id)(msg);
        pending.delete(msg.id);
      }
    };

    await new Promise(r => ws.onopen = r);

    function send(method, params = {}) {
      const msgId = id++;
      return new Promise((resolve) => {
        pending.set(msgId, resolve);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    // Enable Page and Runtime
    await send('Page.enable');
    await send('Runtime.enable');

    console.log('Navigating to blog post...');
    await send('Page.navigate', { url: 'http://localhost:3000/blog/how-to-prevent-cheating-in-online-coding-tests/' });
    await new Promise(r => setTimeout(r, 2000));

    // Evaluate scroll to 0
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
    await new Promise(r => setTimeout(r, 300));

    // Scroll to 1000px
    console.log('Scrolling down 1000px...');
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        window.scrollTo(0, 1000);
        const sidebar = document.querySelector('.blog-sidebar');
        const rect = sidebar.getBoundingClientRect();
        const activeLink = document.querySelector('.blog-toc-item.active')?.textContent;
        return JSON.stringify({
          top: rect.top,
          bottom: rect.bottom,
          activeLink,
          scrollY: window.scrollY
        });
      })()`,
      returnByValue: true
    });
    console.log('At scroll 1000px:', evalRes.result.result.value);

    await new Promise(r => setTimeout(r, 500));

    // Capture screenshot at scroll 1000px
    const shotRes = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'guide_sticky_scroll_1000.png'), Buffer.from(shotRes.result.data, 'base64'));
    console.log('Saved guide_sticky_scroll_1000.png');

    // Scroll to 1700px
    console.log('Scrolling down 1700px...');
    const evalRes2 = await send('Runtime.evaluate', {
      expression: `(() => {
        window.scrollTo(0, 1700);
        const sidebar = document.querySelector('.blog-sidebar');
        const rect = sidebar.getBoundingClientRect();
        const activeLink = document.querySelector('.blog-toc-item.active')?.textContent;
        return JSON.stringify({
          top: rect.top,
          bottom: rect.bottom,
          activeLink,
          scrollY: window.scrollY
        });
      })()`,
      returnByValue: true
    });
    console.log('At scroll 1700px:', evalRes2.result.result.value);

    await new Promise(r => setTimeout(r, 500));

    // Capture screenshot at scroll 1700px
    const shotRes2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'guide_sticky_scroll_1700.png'), Buffer.from(shotRes2.result.data, 'base64'));
    console.log('Saved guide_sticky_scroll_1700.png');

    ws.close();
  } catch (err) {
    console.error('Error during CDP verification:', err);
  } finally {
    edge.kill();
  }
}

main();
