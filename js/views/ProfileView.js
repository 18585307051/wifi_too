export const ProfileView = () => {
    return `
        <div class="view-container profile-view">
            <!-- ID Card Style Header -->
            <div class="profile-header glass" style="position:relative; overflow:hidden; border:1px solid var(--primary-dim);">
                <div style="position:absolute; top:10px; right:10px; font-family:monospace; font-size:10px; color:var(--primary);">ID: 8849-X</div>
                
                <div class="avatar-container" style="position:relative; margin-bottom:15px;">
                     <div class="avatar" style="border:2px solid var(--primary); background:#000;">
                        <i class="ph-fill ph-user-circle-gear" style="font-size:50px;"></i>
                    </div>
                    <div class="scan-line" style="position:absolute; top:0; left:0; width:100%; height:2px; background:var(--primary); animation:scan 2s linear infinite; box-shadow:0 0 10px var(--primary);"></div>
                </div>

                <div class="profile-info">
                    <h3 style="color:#fff; text-shadow:0 0 5px var(--primary);">GUEST USER</h3>
                    <p style="font-family:monospace; color:var(--primary);">LEVEL 1 ACCESS</p>
                </div>
                
                <button class="btn-login" style="margin-top:10px; border-color:var(--primary); color:var(--primary); font-family:var(--font-display);">
                    <i class="ph ph-sign-in"></i> SYSTEM LOGIN
                </button>
            </div>

            <div class="settings-list">
                <div class="section-title" style="font-size:12px; color:var(--text-muted); padding-left:10px; margin-bottom:10px; letter-spacing:1px;">SYSTEM PREFERENCES</div>
                
                <div class="setting-item glass">
                    <i class="ph ph-moon-stars" style="color:var(--secondary)"></i>
                    <span>DARK MODE</span>
                    <label class="switch">
                        <input type="checkbox" checked disabled>
                        <span class="slider round" style="background:#333;"></span>
                    </label>
                </div>
                <div class="setting-item glass">
                    <i class="ph ph-bell-ringing" style="color:var(--accent)"></i>
                    <span>NOTIFICATIONS</span>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                 <div class="setting-item glass">
                    <i class="ph ph-cloud-arrow-up" style="color:var(--success)"></i>
                    <span>AUTO-BACKUP</span>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="setting-item glass" style="justify-content:space-between;">
                    <div style="display:flex; align-items:center;">
                        <i class="ph ph-info" style="color:var(--primary)"></i>
                        <span>VERSION</span>
                    </div>
                    <span class="value" style="font-family:monospace;">v2.0.1-Mk.II</span>
                </div>
            </div>
        </div>
    `;
};
