// Define namespace if not exists
window.App = window.App || {};

window.App.NetworkView = () => {
    // Mock Data - Targets with vulnerability info
    const networks = [
        { ssid: 'TP-LINK_5G_SECURED', bssid: 'A4:CF:12:8B:33:F7', strength: 92, encryption: 'WPA2', vulnerable: true, channel: 6 },
        { ssid: 'NETGEAR-HOME', bssid: '00:1A:2B:3C:4D:5E', strength: 78, encryption: 'WPA3', vulnerable: false, channel: 11 },
        { ssid: 'Starbucks_Guest', bssid: 'F0:9F:C2:11:22:33', strength: 65, encryption: 'OPEN', vulnerable: true, channel: 1 },
        { ssid: 'Hidden-Corp-Net', bssid: '88:15:44:AB:CD:EF', strength: 45, encryption: 'WPA2-Enterprise', vulnerable: false, channel: 36 },
        { ssid: 'D-Link_DIR865', bssid: '1C:7E:E5:AA:BB:CC', strength: 30, encryption: 'WEP', vulnerable: true, channel: 9 },
    ];

    const getVulnTag = (net) => {
        if (net.encryption === 'OPEN') return '<span class="vuln-tag open">开放</span>';
        if (net.vulnerable) return '<span class="vuln-tag vulnerable">高危</span>';
        return '<span class="vuln-tag secure">安全</span>';
    };

    const getActionBtn = (net) => {
        if (net.encryption === 'OPEN') return '<button class="btn-action connect">连接</button>';
        if (net.vulnerable) return '<button class="btn-action crack">破解</button>';
        return '<button class="btn-action getkey">获取密钥</button>';
    };

    const listHtml = networks.map(net => `
        <div class="target-item glass">
            <div class="target-icon">
                <i class="ph-fill ph-wifi-high" style="opacity: ${net.strength / 100}; text-shadow: 0 0 ${net.strength / 5}px ${net.vulnerable ? 'var(--danger)' : 'var(--primary)'}"></i>
            </div>
            <div class="target-info">
                <div class="target-ssid">${net.ssid}</div>
                <div class="target-meta">
                    <span class="enc-type">${net.encryption}</span>
                    <span class="divider">|</span>
                    <span class="bssid">${net.bssid}</span>
                    <span class="divider">|</span>
                    <span>信道:${net.channel}</span>
                </div>
            </div>
            <div class="target-actions">
                ${getVulnTag(net)}
                ${getActionBtn(net)}
            </div>
        </div>
    `).join('');

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
            </div>
            
            <div class="target-list">
                ${listHtml}
            </div>
        </div>
    `;
};
