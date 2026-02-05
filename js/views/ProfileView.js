// Define namespace if not exists
window.App = window.App || {};

window.App.ProfileView = () => {
    // Mock cracked passwords
    const crackedWifi = [
        { ssid: 'TP-LINK_5G_SECURED', password: 'WiFiP@ss2024!', date: '2026-02-05', encryption: 'WPA2' },
        { ssid: 'CoffeeShop_Free', password: 'coffee123', date: '2026-02-04', encryption: 'WPA2' },
        { ssid: 'Neighbor_5G', password: 'summer2025', date: '2026-02-03', encryption: 'WPA3' },
    ];

    const vaultHtml = crackedWifi.map(wifi => `
        <div class="vault-item glass">
            <div class="vault-icon">
                <i class="ph-fill ph-key"></i>
            </div>
            <div class="vault-info">
                <div class="vault-ssid">${wifi.ssid}</div>
                <div class="vault-password">
                    <span class="pw-hidden">••••••••••</span>
                    <span class="pw-revealed" style="display:none;">${wifi.password}</span>
                </div>
                <div class="vault-meta">${wifi.encryption} | ${wifi.date}</div>
            </div>
            <div class="vault-actions">
                <button class="btn-icon reveal" title="显示密码">
                    <i class="ph ph-eye"></i>
                </button>
                <button class="btn-icon copy" title="复制密码">
                    <i class="ph ph-copy"></i>
                </button>
                <button class="btn-icon share" title="分享">
                    <i class="ph ph-share-network"></i>
                </button>
            </div>
        </div>
    `).join('');

    return `
        <div class="view-container profile-view">
            <!-- Vault Header -->
            <div class="vault-header glass">
                <div class="vault-logo">
                    <i class="ph-fill ph-vault"></i>
                    <span>密码保险库</span>
                </div>
                <div class="vault-stats">
                    <div class="stat">
                        <span class="stat-value">${crackedWifi.length}</span>
                        <span class="stat-label">已破解</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">15.2GB</span>
                        <span class="stat-label">已保存</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">128</span>
                        <span class="stat-label">贡献值</span>
                    </div>
                </div>
            </div>

            <div class="section-title" style="margin:20px 0 10px 0; font-size:11px; color:var(--text-muted); letter-spacing:2px;">
                <i class="ph ph-database"></i> 已保存凭证
            </div>

            <div class="vault-list">
                ${vaultHtml}
            </div>

            <div class="section-title" style="margin:25px 0 10px 0; font-size:11px; color:var(--text-muted); letter-spacing:2px;">
                <i class="ph ph-gear"></i> 系统设置
            </div>

            <div class="settings-list">
                <div class="setting-item glass">
                    <i class="ph ph-cloud-arrow-up" style="color:var(--primary)"></i>
                    <span>自动同步云端</span>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="setting-item glass">
                    <i class="ph ph-shield-check" style="color:var(--success)"></i>
                    <span>匿名模式</span>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="setting-item glass" style="justify-content:space-between;">
                    <div style="display:flex; align-items:center; gap:15px;">
                        <i class="ph ph-info" style="color:var(--text-muted)"></i>
                        <span>当前版本</span>
                    </div>
                    <span class="value" style="font-family:monospace; color:var(--danger);">v2.0.0-CN</span>
                </div>
            </div>
        </div>
    `;
};

window.App.initProfileEvents = () => {
    // Reveal password toggle
    document.querySelectorAll('.btn-icon.reveal').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.vault-item');
            const hidden = item.querySelector('.pw-hidden');
            const revealed = item.querySelector('.pw-revealed');
            const icon = btn.querySelector('i');

            if (hidden.style.display !== 'none') {
                hidden.style.display = 'none';
                revealed.style.display = 'inline';
                icon.className = 'ph ph-eye-slash';
            } else {
                hidden.style.display = 'inline';
                revealed.style.display = 'none';
                icon.className = 'ph ph-eye';
            }
        });
    });

    // Copy to clipboard
    document.querySelectorAll('.btn-icon.copy').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.vault-item');
            const password = item.querySelector('.pw-revealed').textContent;
            navigator.clipboard.writeText(password).then(() => {
                btn.innerHTML = '<i class="ph ph-check" style="color:var(--success)"></i>';
                setTimeout(() => {
                    btn.innerHTML = '<i class="ph ph-copy"></i>';
                }, 1500);
            });
        });
    });
};
