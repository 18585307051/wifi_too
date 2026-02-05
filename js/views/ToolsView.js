export const ToolsView = () => {
    return `
        <div class="view-container tools-view">
           <header class="main-header">
                <div class="header-title">
                    <h2 style="margin:0; text-shadow:0 0 10px var(--secondary);">UTILITIES</h2>
                    <p style="margin:0; font-size:10px; color:var(--text-muted); letter-spacing:2px;">SYSTEM DIAGNOSTICS</p>
                </div>
            </header>
            
            <div class="tools-grid">
                <!-- Speed Test -->
                <div class="tool-card glass" id="tool-speed">
                    <div class="tool-icon speed">
                        <i class="ph ph-speedometer"></i>
                    </div>
                    <div class="tool-info">
                        <h3>SPEED TEST</h3>
                        <p>LATENCY / DOWN / UP</p>
                    </div>
                    <i class="ph ph-caret-right" style="margin-left:auto; color:var(--text-muted)"></i>
                </div>

                <!-- Security Scan -->
                <div class="tool-card glass" id="tool-security">
                    <div class="tool-icon security">
                        <i class="ph ph-shield-check"></i>
                    </div>
                    <div class="tool-info">
                        <h3>SECURITY</h3>
                        <p>ARP / DNS / SSL</p>
                    </div>
                    <i class="ph ph-caret-right" style="margin-left:auto; color:var(--text-muted)"></i>
                </div>

                <!-- Signal Optimize -->
                <div class="tool-card glass">
                    <div class="tool-icon signal">
                        <i class="ph ph-broadcast"></i>
                    </div>
                    <div class="tool-info">
                        <h3>OPTIMIZE</h3>
                        <p>CHANNEL ANALYSIS</p>
                    </div>
                    <i class="ph ph-caret-right" style="margin-left:auto; color:var(--text-muted)"></i>
                </div>

                 <!-- Device List (New Mock) -->
                <div class="tool-card glass">
                    <div class="tool-icon" style="border:1px solid #fff; box-shadow:0 0 10px rgba(255,255,255,0.2);">
                        <i class="ph ph-devices"></i>
                    </div>
                    <div class="tool-info">
                        <h3>DEVICES</h3>
                        <p>LAN SCANNER</p>
                    </div>
                    <i class="ph ph-caret-right" style="margin-left:auto; color:var(--text-muted)"></i>
                </div>
            </div>
        </div>
    `;
};
