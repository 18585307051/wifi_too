// Define namespace if not exists
window.App = window.App || {};

window.App.HomeView = () => {
    return `
        <div class="view-container home-view">
            <!-- Header -->
            <header class="main-header">
                <div class="logo">
                    <i class="ph-fill ph-skull"></i>
                    <span>天网破解器</span>
                </div>
                <div class="status-badge anonymous">
                    <i class="ph ph-mask-happy"></i>
                    <span>匿名模式</span>
                </div>
            </header>

            <!-- Main Crack Visual -->
            <div class="connect-container">
                <div class="ring ring-1 danger"></div>
                <div class="ring ring-2 danger"></div>
                
                <button id="btn-crack" class="crack-btn">
                    <div class="inner-content">
                        <i class="ph-fill ph-lock-key-open"></i>
                        <span class="status-text">一键破解</span>
                    </div>
                </button>
            </div>
             
            <div class="target-status" style="text-align:center; margin-bottom:20px;">
                 <p class="status-label" style="font-family:var(--font-display); letter-spacing:1px; color:var(--danger);">目标: 无</p>
                 <p class="bssid-label" style="color:var(--text-muted); font-family:monospace; font-size:12px;">MAC地址: --:--:--:--:--:--</p>
            </div>

            <!-- Terminal Output -->
            <div class="terminal-container glass">
                <div class="terminal-header">
                    <span class="terminal-title"><i class="ph ph-terminal-window"></i> 终端控制台</span>
                    <div class="terminal-dots">
                        <span class="dot red"></span>
                        <span class="dot yellow"></span>
                        <span class="dot green"></span>
                    </div>
                </div>
                <div id="terminal-output" class="terminal-body">
                    <p class="log-line"><span class="log-time">[00:00:00]</span> 系统初始化完成。</p>
                    <p class="log-line"><span class="log-time">[00:00:01]</span> 等待选择目标...</p>
                    <p class="log-line blink">_</p>
                </div>
            </div>

            <!-- Dashboard Grid -->
            <div class="dashboard-grid" style="margin-top:20px;">
                <div class="dash-item glass">
                    <i class="icon ph ph-hourglass-medium" style="color: var(--accent);"></i>
                    <span class="value">00:00</span>
                    <span class="label">耗时</span>
                </div>
                <div class="dash-item glass">
                    <i class="icon ph ph-key" style="color: var(--danger);"></i>
                    <span class="value">0</span>
                    <span class="label">已破解</span>
                </div>
                <div class="dash-item glass">
                    <i class="icon ph ph-database" style="color: var(--success);"></i>
                    <span class="value">120万</span>
                    <span class="label">字典库</span>
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
        "正在扫描附近网络...",
        "发现 5 个潜在目标。",
        "锁定最强信号源: TP-LINK_5G_SECURED",
        "MAC地址: A4:CF:12:8B:33:F7",
        "加密方式: WPA2-PSK",
        "正在启动握手包捕获...",
        "握手包捕获成功！",
        "加载字典库: rockyou.txt (120万条目)",
        "开始暴力破解密码...",
        "[>>>>>>>>>         ] 45% - 尝试: password123",
        "[>>>>>>>>>>>>>>    ] 70% - 尝试: sunshine88",
        "[>>>>>>>>>>>>>>>>>>] 100%",
        "<span style='color:var(--success)'>密码已找到: WiFiP@ss2024!</span>",
        "连接建立成功。IP地址: 192.168.1.105"
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
                statusText.innerText = "停止";
                icon.className = "ph-fill ph-lock-open";
                statusLabel.innerText = "正在攻击...";
                statusLabel.style.color = "var(--accent)";
                logIndex = 0;

                logInterval = setInterval(() => {
                    if (logIndex < logs.length) {
                        addLog(logs[logIndex]);
                        logIndex++;
                    } else {
                        clearInterval(logInterval);
                        statusLabel.innerText = "目标: 已破解!";
                        statusLabel.style.color = "var(--success)";
                        document.querySelector('.bssid-label').innerText = "MAC地址: A4:CF:12:8B:33:F7";
                    }
                }, 800);

            } else {
                btn.classList.remove('active');
                statusText.innerText = "一键破解";
                icon.className = "ph-fill ph-lock-key-open";
                statusLabel.innerText = "目标: 无";
                statusLabel.style.color = "var(--danger)";
                clearInterval(logInterval);
                addLog("<span style='color:var(--danger)'>用户已终止操作。</span>");
            }
        });
    }
};
