import subprocess
import json
import urllib.request
import os
import time

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"

# Start Edge with remote debugging
proc = subprocess.Popen([
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--remote-debugging-port=9222",
    "about:blank"
])

time.sleep(1.5)

try:
    # Get WebSocket debugger URL
    resp = urllib.request.urlopen("http://127.0.0.1:9222/json/list")
    tabs = json.loads(resp.read().decode())
    ws_url = tabs[0]["webSocketDebuggerUrl"]
    print("Edge CDP ready at:", ws_url)
except Exception as e:
    print("Error connecting to Edge CDP:", e)
finally:
    proc.terminate()

