export const HomeView = () => {
    return `
        <div class="view-container home-view">
            <!-- Header -->
            <header class="main-header">
                <div class="logo">
                    <i class="ph-fill ph-wifi-high"></i>
                    <span>SKYNET WIFI</span>
                </div>
                <div class="status-badge secure">
                    <i class="ph ph-shield-check"></i>
                    <span>SYSTEM SECURE</span>
                </div>
            </header>

            <!-- Main Connect Visual -->
            <div class="connect-container">
                <div class="ring ring-1"></div>
                <div class="ring ring-2"></div>
                
                <button id="btn-connect" class="connect-btn">
                    <div class="inner-content">
                        <i class="ph-fill ph-power"></i>
                        <span class="status-text">CONNECT</span>
                    </div>
                </button>
            </div>
             
            <div class="connection-status" style="text-align:center; margin-bottom:30px;">
                 <p class="status-label" style="font-family:var(--font-display); letter-spacing:1px; color:#fff;">DISCONNECTED</p>
                 <p class="ip-label" style="color:var(--primary);">--.--.--.--</p>
            </div>

            <!-- Dashboard Grid -->
            <div class="dashboard-grid">
                <div class="dash-item glass">
                    <i class="icon ph ph-speedometer" style="color: var(--accent);"></i>
                    <span class="value">-- ms</span>
                    <span class="label">PING</span>
                </div>
                <div class="dash-item glass">
                    <i class="icon ph ph-shield-check" style="color: var(--primary);"></i>
                    <span class="value">100</span>
                    <span class="label">SECURITY</span>
                </div>
                <div class="dash-item glass">
                    <i class="icon ph ph-wifi-high" style="color: var(--success);"></i>
                    <span class="value">0%</span>
                    <span class="label">SIGNAL</span>
                </div>
            </div>
        </div>
    `;
};

export const initHomeEvents = () => {
    const btn = document.getElementById('btn-connect');
    if (btn) {
        btn.addEventListener('click', () => {
            const isConnected = btn.classList.toggle('connected');
            const statusText = btn.querySelector('.status-text');
            const statusLabel = document.querySelector('.status-label');
            const ipLabel = document.querySelector('.ip-label');

            if (isConnected) {
                statusText.innerText = "STOP";
                statusLabel.innerText = "CONNECTED: HOME-5G-X";
                statusLabel.style.color = "var(--success)";
                statusLabel.style.textShadow = "0 0 10px var(--success)";
                ipLabel.innerText = "192.168.1.105";
            } else {
                statusText.innerText = "CONNECT";
                statusLabel.innerText = "DISCONNECTED";
                statusLabel.style.color = "white";
                statusLabel.style.textShadow = "none";
                ipLabel.innerText = "--.--.--.--";
            }
        });
    }
};
