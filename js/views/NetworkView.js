export const NetworkView = () => {
    // Mock Data with more detail
    const networks = [
        { ssid: 'StarLink-X88', strength: 95, secure: true, free: true, channel: 6 },
        { ssid: 'CyberCafe_Free', strength: 82, secure: false, free: true, channel: 11 },
        { ssid: 'Unit-734-Secure', strength: 65, secure: true, free: false, channel: 1 },
        { ssid: 'Unknown-Signal', strength: 40, secure: true, free: false, channel: 9 },
    ];

    const listHtml = networks.map(net => `
        <div class="network-item">
            <div class="net-icon">
                <i class="ph-fill ph-wifi-high" style="opacity: ${net.strength / 100}; text-shadow: 0 0 ${net.strength / 5}px var(--primary)"></i>
            </div>
            <div class="net-info">
                <div class="net-ssid">${net.ssid}</div>
                <div class="net-meta" style="font-size:10px; color:var(--text-muted); font-family:monospace;">
                    CH:${net.channel} | ${net.strength}% | ${net.secure ? 'WPA3' : 'OPEN'}
                </div>
            </div>
            <div class="net-action">
                ${net.free
            ? `<button class="btn-connect-sm">CONNECT</button>`
            : `<i class="ph ph-lock-key" style="color:var(--text-muted)"></i>`
        }
            </div>
            <!-- Decorative corner -->
            <div style="position:absolute; bottom:0; right:0; width:10px; height:10px; border-bottom:1px solid var(--primary); border-right:1px solid var(--primary); opacity:0.5;"></div>
        </div>
    `).join('');

    return `
        <div class="view-container network-view">
            <header class="main-header">
                <div class="header-title">
                    <h2 style="margin:0; text-shadow:0 0 10px var(--primary);">NETWORKS</h2>
                    <p style="margin:0; font-size:10px; color:var(--text-muted); letter-spacing:2px;">SCANNING FREQUENCIES...</p>
                </div>
                <div class="scan-anim-box" style="position:relative; width:40px; height:40px; display:flex; justify-content:center; align-items:center;">
                    <i class="ph ph-radar" style="font-size:30px; color:var(--primary); animation:pulse 2s infinite;"></i>
                    <div style="position:absolute; width:100%; height:100%; border:1px dashed var(--primary); border-radius:50%; animation:spin 4s linear infinite;"></div>
                </div>
            </header>
            
            <div class="network-list" style="padding-top:10px;">
                ${listHtml}
            </div>
        </div>
    `;
};
