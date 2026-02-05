// Define namespace if not exists
window.App = window.App || {};

window.App.ToolsView = () => {
    return `
        <div class="view-container tools-view">
           <header class="main-header">
                <div class="header-title">
                    <h2 style="margin:0; text-shadow:0 0 10px var(--danger);">攻击武器库</h2>
                    <p style="margin:0; font-size:10px; color:var(--text-muted); letter-spacing:2px;">渗透测试工具集</p>
                </div>
            </header>
            
            <div class="tools-grid">
                <!-- Dictionary Attack -->
                <div class="tool-card glass" id="tool-dict">
                    <div class="tool-icon dict">
                        <i class="ph ph-book-bookmark"></i>
                    </div>
                    <div class="tool-info">
                        <h3>字典攻击</h3>
                        <p>暴力破解密码</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot active"></span>
                        <span>120万</span>
                    </div>
                </div>

                <!-- WPS PIN Attack -->
                <div class="tool-card glass" id="tool-wps">
                    <div class="tool-icon wps">
                        <i class="ph ph-fingerprint"></i>
                    </div>
                    <div class="tool-info">
                        <h3>WPS PIXIE</h3>
                        <p>PIN码漏洞攻击</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot"></span>
                        <span>就绪</span>
                    </div>
                </div>

                <!-- Deauth Attack -->
                <div class="tool-card glass warning" id="tool-deauth">
                    <div class="tool-icon deauth">
                        <i class="ph ph-prohibit"></i>
                    </div>
                    <div class="tool-info">
                        <h3>断网攻击</h3>
                        <p>强制客户端下线</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot danger"></span>
                        <span>警告</span>
                    </div>
                </div>

                <!-- Packet Sniffer -->
                <div class="tool-card glass" id="tool-sniffer">
                    <div class="tool-icon sniffer">
                        <i class="ph ph-waves"></i>
                    </div>
                    <div class="tool-info">
                        <h3>抓包分析</h3>
                        <p>握手包/流量捕获</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot"></span>
                        <span>空闲</span>
                    </div>
                </div>

                <!-- Hash Cracker -->
                <div class="tool-card glass" id="tool-hash">
                    <div class="tool-icon hash">
                        <i class="ph ph-hash"></i>
                    </div>
                    <div class="tool-info">
                        <h3>哈希破解</h3>
                        <p>PMKID / EAPOL分析</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot"></span>
                        <span>就绪</span>
                    </div>
                </div>

                <!-- MAC Spoof -->
                <div class="tool-card glass" id="tool-mac">
                    <div class="tool-icon mac">
                        <i class="ph ph-identification-card"></i>
                    </div>
                    <div class="tool-info">
                        <h3>MAC伪装</h3>
                        <p>身份隐藏/绕过过滤</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot"></span>
                        <span>OFF</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};
