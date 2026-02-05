// Define namespace if not exists
window.App = window.App || {};

window.App.HomeView = () => {
    return `
        <div class="view-container home-view">
            <!-- Header -->
            <header class="main-header">
                <div class="logo">
                    <i class="ph-fill ph-skull"></i>
                    <span>SKYNET CRACKER</span>
                </div>
                <div class="status-badge anonymous">
                    <i class="ph ph-mask-happy"></i>
                    <span>ANONYMOUS</span>
                </div>
            </header>

            <!-- Main Crack Visual -->
            <div class="connect-container">
                <div class="ring ring-1 danger"></div>
                <div class="ring ring-2 danger"></div>
                
                <button id="btn-crack" class="crack-btn">
                    <div class="inner-content">
                        <i class="ph-fill ph-lock-key-open"></i>
                        <span class="status-text">CRACK</span>
                    </div>
                </button>
            </div>
             
            <div class="target-status" style="text-align:center; margin-bottom:20px;">
                 <p class="status-label" style="font-family:var(--font-display); letter-spacing:1px; color:var(--danger);">TARGET: NONE</p>
                 <p class="bssid-label" style="color:var(--text-muted); font-family:monospace; font-size:12px;">BSSID: --:--:--:--:--:--</p>
            </div>

            <!-- Terminal Output -->
            <div class="terminal-container glass">
                <div class="terminal-header">
                    <span class="terminal-title"><i class="ph ph-terminal-window"></i> TERMINAL</span>
                    <div class="terminal-dots">
                        <span class="dot red"></span>
                        <span class="dot yellow"></span>
                        <span class="dot green"></span>
                    </div>
                </div>
                <div id="terminal-output" class="terminal-body">
                    <p class="log-line"><span class="log-time">[00:00:00]</span> System initialized.</p>
                    <p class="log-line"><span class="log-time">[00:00:01]</span> Waiting for target...</p>
                    <p class="log-line blink">_</p>
                </div>
            </div>

            <!-- Dashboard Grid -->
            <div class="dashboard-grid" style="margin-top:20px;">
                <div class="dash-item glass">
                    <i class="icon ph ph-hourglass-medium" style="color: var(--accent);"></i>
                    <span class="value">00:00</span>
                    <span class="label">ELAPSED</span>
                </div>
                <div class="dash-item glass">
                    <i class="icon ph ph-key" style="color: var(--danger);"></i>
                    <span class="value">0</span>
                    <span class="label">CRACKED</span>
                </div>
                <div class="dash-item glass">
                    <i class="icon ph ph-database" style="color: var(--success);"></i>
                    <span class="value">1.2M</span>
                    <span class="label">DICT</span>
                </div>
            </div>
        </div>
    `;
};

window.App.initHomeEvents = () => {
    const btn = document.getElementById('btn-crack');
    const terminal = document.getElementById('terminal-output');
    let isCracking = false;
    let logInterval;

    const logs = [
        "Scanning nearby networks...",
        "Found 5 potential targets.",
        "Locking onto strongest signal: TP-LINK_5G_SECURED",
        "BSSID: A4:CF:12:8B:33:F7",
        "Encryption: WPA2-PSK",
        "Initiating handshake capture...",
        "Handshake captured!",
        "Loading dictionary: rockyou.txt (1.2M entries)",
        "Brute-forcing password...",
        "[>>>>>>>>>         ] 45% - Trying: password123",
        "[>>>>>>>>>>>>>>    ] 70% - Trying: sunshine88",
        "[>>>>>>>>>>>>>>>>>>] 100%",
        "<span style='color:var(--success)'>KEY FOUND: WiFiP@ss2024!</span>",
        "Connection established. IP: 192.168.1.105"
    ];
    let logIndex = 0;

    const addLog = (text) => {
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        const blinkLine = terminal.querySelector('.blink');
        const newLog = document.createElement('p');
        newLog.className = 'log-line';
        newLog.innerHTML = `<span class="log-time">[${time}]</span> ${text}`;
        terminal.insertBefore(newLog, blinkLine);
        terminal.scrollTop = terminal.scrollHeight;
    };

    if (btn) {
        btn.addEventListener('click', () => {
            isCracking = !isCracking;
            const statusText = btn.querySelector('.status-text');
            const statusLabel = document.querySelector('.status-label');
            const icon = btn.querySelector('i');

            if (isCracking) {
                btn.classList.add('active');
                statusText.innerText = "STOP";
                icon.className = "ph-fill ph-lock-open";
                statusLabel.innerText = "ATTACKING...";
                statusLabel.style.color = "var(--accent)";
                logIndex = 0;

                logInterval = setInterval(() => {
                    if (logIndex < logs.length) {
                        addLog(logs[logIndex]);
                        logIndex++;
                    } else {
                        clearInterval(logInterval);
                        statusLabel.innerText = "TARGET: CRACKED!";
                        statusLabel.style.color = "var(--success)";
                        document.querySelector('.bssid-label').innerText = "BSSID: A4:CF:12:8B:33:F7";
                    }
                }, 800);

            } else {
                btn.classList.remove('active');
                statusText.innerText = "CRACK";
                icon.className = "ph-fill ph-lock-key-open";
                statusLabel.innerText = "TARGET: NONE";
                statusLabel.style.color = "var(--danger)";
                clearInterval(logInterval);
                addLog("<span style='color:var(--danger)'>ABORTED BY USER.</span>");
            }
        });
    }
};
