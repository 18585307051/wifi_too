export const ProfileView = () => {
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
                <button class="btn-icon reveal" title="Reveal">
                    <i class="ph ph-eye"></i>
                </button>
                <button class="btn-icon copy" title="Copy">
                    <i class="ph ph-copy"></i>
                </button>
                <button class="btn-icon share" title="Share">
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
                    <span>PASSWORD VAULT</span>
                </div>
                <div class="vault-stats">
                    <div class="stat">
                        <span class="stat-value">${crackedWifi.length}</span>
                        <span class="stat-label">CRACKED</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">15.2GB</span>
                        <span class="stat-label">SAVED</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">128</span>
                        <span class="stat-label">CONTRIB</span>
                    </div>
                </div>
            </div>

            <div class="section-title" style="margin:20px 0 10px 0; font-size:11px; color:var(--text-muted); letter-spacing:2px;">
                <i class="ph ph-database"></i> SAVED CREDENTIALS
            </div>

            <div class="vault-list">
                ${vaultHtml}
            </div>

            <div class="section-title" style="margin:25px 0 10px 0; font-size:11px; color:var(--text-muted); letter-spacing:2px;">
                <i class="ph ph-gear"></i> SETTINGS
            </div>

            <div class="settings-list">
                <div class="setting-item glass">
                    <i class="ph ph-cloud-arrow-up" style="color:var(--primary)"></i>
                    <span>AUTO-SYNC TO CLOUD</span>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="setting-item glass">
                    <i class="ph ph-shield-check" style="color:var(--success)"></i>
                    <span>ANONYMOUS MODE</span>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="setting-item glass" style="justify-content:space-between;">
                    <div style="display:flex; align-items:center; gap:15px;">
                        <i class="ph ph-info" style="color:var(--text-muted)"></i>
                        <span>VERSION</span>
                    </div>
                    <span class="value" style="font-family:monospace; color:var(--danger);">v2.0.0-CRACK</span>
                </div>
            </div>
        </div>
    `;
};

export const initProfileEvents = () => {
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
