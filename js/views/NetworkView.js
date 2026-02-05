// Define namespace if not exists
window.App = window.App || {};

window.App.NetworkView = () => {
    return `
        <div class="view-container network-view">
            <header class="main-header">
                <div class="header-title">
                    <h2 style="margin:0; text-shadow:0 0 10px var(--danger);">目标列表</h2>
                    <p style="margin:0; font-size:10px; color:var(--text-muted); letter-spacing:2px;">无线审计模式</p>
                </div>
                <div class="scan-indicator">
                    <i class="ph ph-radar" style="font-size:28px; color:var(--danger); animation:pulse 1.5s infinite;"></i>
                </div>
            </header>
            
            <!-- Filter Bar -->
            <div class="filter-bar glass" style="display:flex; gap:10px; padding:10px 15px; border-radius:10px; margin-bottom:15px;">
                <button class="filter-btn active">全部</button>
                <button class="filter-btn">可破解</button>
                <button class="filter-btn">强加密</button>
                <button class="filter-btn" id="btn-rescan" style="margin-left:auto;"><i class="ph ph-arrows-clockwise"></i></button>
            </div>
            
            <div class="target-list" id="target-list-container">
                <div class="loading-scan" style="text-align:center; padding:50px; color:var(--text-muted);">
                    <i class="ph ph-spinner" style="font-size:40px; animation:spin 1s infinite linear;"></i>
                    <p style="margin-top:10px; letter-spacing:2px;">正在扫描频段...</p>
                </div>
            </div>
        </div>
    `;
};

window.App.initNetworkEvents = async () => {
    const container = document.getElementById('target-list-container');
    const btnRescan = document.getElementById('btn-rescan');

    const renderNetworkItem = (net) => {
        // Determine security/vulnerability
        let encryption = (net.security_flags && net.security_flags.length > 0) ? net.security_flags.join('/') : (net.security || 'OPEN');
        let isOpen = encryption.includes('open') || encryption === 'OPEN';
        let isVulnerable = isOpen || encryption.includes('WEP') || encryption.includes('WPS');

        // Signal strength conversion
        let quality = net.quality || 0;

        // Tags
        let vulnTag = '<span class="vuln-tag secure">安全</span>';
        if (isOpen) vulnTag = '<span class="vuln-tag open">开放</span>';
        else if (isVulnerable) vulnTag = '<span class="vuln-tag vulnerable">高危</span>';

        // Actions
        let actionBtn = '<button class="btn-action getkey">获取密钥</button>';
        if (isOpen) actionBtn = '<button class="btn-action connect">连接</button>';
        else if (isVulnerable) actionBtn = '<button class="btn-action crack">破解</button>';

        return `
        <div class="target-item glass">
            <div class="target-icon">
                <i class="ph-fill ph-wifi-high" style="opacity: ${quality / 100}; text-shadow: 0 0 ${quality / 5}px ${isVulnerable ? 'var(--danger)' : 'var(--primary)'}"></i>
            </div>
            <div class="target-info">
                <div class="target-ssid">${net.ssid || 'Hidden SSID'}</div>
                <div class="target-meta">
                    <span class="enc-type">${encryption}</span>
                    <span class="divider">|</span>
                    <span class="bssid">${net.bssid || net.mac}</span>
                    <span class="divider">|</span>
                    <span>信道:${net.channel}</span>
                </div>
            </div>
            <div class="target-actions">
                ${vulnTag}
                ${actionBtn}
            </div>
        </div>`;
    };

    const startScan = async () => {
        if (!container) return;
        container.innerHTML = `
            <div class="loading-scan" style="text-align:center; padding:50px; color:var(--text-muted);">
                <i class="ph ph-spinner" style="font-size:40px; animation:spin 1s infinite linear;"></i>
                <p style="margin-top:10px; letter-spacing:2px;">正在扫描频段 (真实模式)...</p>
            </div>
        `;

        if (window.electronAPI) {
            try {
                const result = await window.electronAPI.scanWifi();
                console.log('Scan Result:', result);
                if (result.success && result.data && result.data.length > 0) {
                    container.innerHTML = result.data.map(net => renderNetworkItem(net)).join('');
                } else if (result.success) {
                    container.innerHTML = '<div class="empty-state" style="text-align:center; padding:20px;">附近未发现WiFi信号。</div>';
                } else {
                    container.innerHTML = `<div class="error-state" style="text-align:center; color:var(--danger); padding:20px;">扫描失败: ${result.error}</div>`;
                }
            } catch (e) {
                container.innerHTML = `<div class="error-state" style="text-align:center; color:var(--danger); padding:20px;">系统错误: ${e.message}</div>`;
            }
        } else {
            // Browser Fallback (Mock)
            setTimeout(() => {
                container.innerHTML = `
                <div style="padding:20px; text-align:center; color:orange; border:1px solid orange;">
                    <i class="ph ph-warning"></i>
                    <p>浏览器预览模式 - 无法访问硬件</p>
                    <p>请打包为EXE运行以查看真实WiFi</p>
                </div>
                ` + renderNetworkItem({ ssid: 'MOCK_TEST_NET', quality: 90, security: 'WPA2' });
            }, 1000);
        }
    };

    // Initial Scan
    startScan();

    // Bind Rescan
    if (btnRescan) {
        btnRescan.addEventListener('click', startScan);
    }
};
