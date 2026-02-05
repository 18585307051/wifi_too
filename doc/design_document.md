# 万能 WiFi 钥匙 (Sci-Fi Edition) - 功能 UI 设计文档

本文档详细描述了 Web 端应用“万能 WiFi 钥匙”的各个核心页面的 UI 设计规范、功能逻辑及视觉细节。整体风格定位为 **"Cyberpunk / High-Tech"**（赛博朋克/高科技），强调全息界面、霓虹光效与极致的沉浸感。

---

## 1. 全局设计规范 (Global Design System)

### 1.1 色彩体系 (Color Palette)
*   **Primary (核心蓝)**: `#00f3ff` - 用于主要按钮、激活状态、全息投影边框。
*   **Secondary (赛博紫)**: `#bc13fe` - 用于次要元素、背景光球、装饰性渐变。
*   **Accent (警示黄)**: `#ffe600` - 用于测速延迟、强调信息。
*   **Success (安全绿)**: `#00ffa3` - 用于连接成功、安全评分高、信号优良。
*   **Background (深空黑)**: `#050508` - 极深的黑色基底，配合 `#020204` 的透视网格背景。

### 1.2 字体 (Typography)
*   **Display Font**: `Rajdhani` (Google Fonts) - 用于标题、数字、按钮文字。具有方形与机械感。
*   **Body Font**: `Exo 2` (Google Fonts) - 用于正文，现代且易读。
*   **Monospace**: 系统等宽字体 - 用于 IP 地址、Mac 地址、版本号，增加代码感。

### 1.3 交互动效 (Micro-Interactions)
*   **Glow Effect**: 所有可点击元素在 Hover 时产生外发光 (`box-shadow`)。
*   **Glassmorphism**: 卡片背景采用低透明度 (`opacity: 0.4`) + 高模糊 (`backdrop-filter: blur(15px)`)。
*   **Holographic Overlay**: 卡片表面叠加 45 度角的斜向扫描光泽。

---

## 2. 页面详细设计 (Page Breakdown)

### 2.1 首页 (Home / Penetration Center)
**功能**: 核心渗透控制台，一键启动漏洞扫描与自动破解。

**UI 元素**:
1.  **Header**:
    *   Left: Logo "SKYNET CRACKER" (黑客风格)。
    *   Right: "ANONYMOUS" 匿名状态 (面具图标)。
2.  **Central Core (破解核心)**:
    *   **Crack Button**: 红色/深红色的“解锁”按钮，带有锁头图标。
    *   **Terminal Output**: 按钮下方增加一块滚动文本区域，模拟显示 "Intializing handshake...", "Brute-forcing...", "Key found!" 等日志。
    *   **Rotating Rings**: 红色警戒风格的旋转环。
3.  **Target Status**:
    *   显示当前锁定的最佳目标 (Target BSSID)。

### 2.2 发现页 (Targets / Wireless Audit)
**功能**: 扫描所有 WiFi 信号，标注加密方式与破解成功率。

**UI 元素**:
1.  **Target List**:
    *   **Vulnerability Tag**: 每个列表项增加标签 "VULNERABLE" (可破), "SECURE" (难破), "OPEN" (无锁)。
    *   **Encryption**: 显示 WEP / WPA / WPA2 / WPA3。
    *   **Action**: 
        *   "CRACK": 启动暴力破解。
        *   "GET KEY": 尝试云端获取。
2.  **Filter**: 顶部增加筛选器 (只显示可破解 / 信号强)。

### 2.3 工具箱 (Arsenal / Attack Tools)
**功能**: 提供多种攻击与辅助工具。

**UI 元素**:
1.  **Tool Cards**:
    *   **Dictionary Attack**: 字典管理与配置，图标为书本/数据库。
    *   **WPS Pixie Dust**: 针对 WPS 的 PIN 码漏洞攻击。
    *   **Deauth Attack**: (慎用) WiFi 干扰/踢人下线工具图标。
    *   **Packet Sniffer**: 抓包分析器 UI。

### 2.4 个人中心 (Vault / Database)
**功能**: 存储已破解的 WiFi 密码本与破解记录。

**UI 元素**:
1.  **Password Vault**: 类似保险箱的界面，列出所有已成功破解的 WiFi 账号密码。
    *   支持 "COPY PASSWORD" 与 "SHARE" (分享到云端数据库)。
2.  **Stats**: 展示 "已破解数量", "节省流量", "贡献算力"。

---

## 3. 未来扩展规划 (Future Roadmap)

*   **Mobile App**: 使用 Capacitor/Cordova 封装 Web 内容，调用原生 WiFi API 实现真正的扫描连接。
*   **WebAssembly**: 引入 Rust/C++ 模块进行高性能的加密安全性运算。
*   **Cloud Sync**: 用户登录后同步 WiFi 密码本（需加密存储）。

---
**Document Status**: `v1.0` | **Last Updated**: `2026-02-05`
