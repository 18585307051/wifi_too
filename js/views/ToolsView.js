export const ToolsView = () => {
    return `
        <div class="view-container tools-view">
           <header class="main-header">
                <div class="header-title">
                    <h2 style="margin:0; text-shadow:0 0 10px var(--danger);">ARSENAL</h2>
                    <p style="margin:0; font-size:10px; color:var(--text-muted); letter-spacing:2px;">ATTACK TOOLKIT</p>
                </div>
            </header>
            
            <div class="tools-grid">
                <!-- Dictionary Attack -->
                <div class="tool-card glass" id="tool-dict">
                    <div class="tool-icon dict">
                        <i class="ph ph-book-bookmark"></i>
                    </div>
                    <div class="tool-info">
                        <h3>DICTIONARY</h3>
                        <p>WORDLIST BRUTE-FORCE</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot active"></span>
                        <span>1.2M</span>
                    </div>
                </div>

                <!-- WPS PIN Attack -->
                <div class="tool-card glass" id="tool-wps">
                    <div class="tool-icon wps">
                        <i class="ph ph-fingerprint"></i>
                    </div>
                    <div class="tool-info">
                        <h3>WPS PIXIE</h3>
                        <p>PIN CODE EXPLOIT</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot"></span>
                        <span>READY</span>
                    </div>
                </div>

                <!-- Deauth Attack -->
                <div class="tool-card glass warning" id="tool-deauth">
                    <div class="tool-icon deauth">
                        <i class="ph ph-prohibit"></i>
                    </div>
                    <div class="tool-info">
                        <h3>DEAUTH</h3>
                        <p>DISCONNECT CLIENTS</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot danger"></span>
                        <span>CAUTION</span>
                    </div>
                </div>

                <!-- Packet Sniffer -->
                <div class="tool-card glass" id="tool-sniffer">
                    <div class="tool-icon sniffer">
                        <i class="ph ph-waves"></i>
                    </div>
                    <div class="tool-info">
                        <h3>SNIFFER</h3>
                        <p>HANDSHAKE CAPTURE</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot"></span>
                        <span>IDLE</span>
                    </div>
                </div>

                <!-- Hash Cracker -->
                <div class="tool-card glass" id="tool-hash">
                    <div class="tool-icon hash">
                        <i class="ph ph-hash"></i>
                    </div>
                    <div class="tool-info">
                        <h3>HASH CRACK</h3>
                        <p>PMKID / EAPOL</p>
                    </div>
                    <div class="tool-status">
                        <span class="status-dot"></span>
                        <span>READY</span>
                    </div>
                </div>

                <!-- MAC Spoof -->
                <div class="tool-card glass" id="tool-mac">
                    <div class="tool-icon mac">
                        <i class="ph ph-identification-card"></i>
                    </div>
                    <div class="tool-info">
                        <h3>MAC SPOOF</h3>
                        <p>IDENTITY MASK</p>
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
