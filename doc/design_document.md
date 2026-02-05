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

### 2.1 首页 (Home / Connection Center)
**功能**: 核心连接控制台，展示连接状态与关键网络指标。

**UI 元素**:
1.  **Header**:
    *   Left: Logo "SKYNET WIFI" (带发光特效)。
    *   Right: "SYSTEM SECURE" 盾牌徽章 (绿色呼吸灯)。
2.  **Central Core (核心连接器)**:
    *   **Reactor Button**: 中央巨大的圆形按钮，模拟核反应堆核心。
    *   **Rotating Rings**: 按钮周围环绕两层反向旋转的能量环（外层紫色，内层蓝色）。
    *   **Interaction**: 点击按钮 -> 能量环加速 -> 颜色变为绿色 (Connected) -> 核心区域显示 "STOP"。
3.  **Status Display**:
    *   显示当前的 SSID (如 "HOME-5G-X") 与 IP 地址 (等宽字体)。
4.  **Dashboard Grid (仪表盘)**:
    *   **Ping**: 显示毫秒数 (e.g., "12 ms")，图标黄色。
    *   **Security**: 显示评分 (e.g., "100"), 图标蓝色。
    *   **Signal**: 显示百分比 (e.g., "98%"), 图标绿色。

### 2.2 发现页 (Networks / Discovery)
**功能**: 扫描并展示附近的 WiFi 热点，支持查看详情与连接。

**UI 元素**:
1.  **Header**:
    *   Title: "NETWORKS" + Subtitle "SCANNING FREQUENCIES..."。
    *   **Radar Animation**: 右侧显示一个雷达扫描动画，模拟实时搜寻信号。
2.  **Network List**:
    *   **List Item**: 每个热点为一个全息卡片。
    *   **Signal Icon**: 根据信号强度调整透明度和文字阴影。
    *   **Meta Info**: 显示 SSID, Channel (信道), 加密方式 (WPA3/OPEN)。
    *   **Action**: "FREE" 热点显示 "CONNECT" 按钮；加密热点显示 "LOCK" 图标。
    *   **Decorations**: 卡片右下角带有装饰性的 UI 角标 (Corner Accent)。

### 2.3 工具箱 (Tools / Utilities)
**功能**: 提供网络诊断、优化与安全工具。

**UI 元素**:
1.  **Grid Layout**: 垂直排列的功能卡片。
2.  **Tool Cards**:
    *   **Speed Test**: 橙红色渐变图标，支持测速（Ping/Down/Up）。
    *   **Security Scan**: 青蓝色渐变图标，支持 ARP/DNS 扫描。
    *   **Optimize**: 翠绿色渐变图标，信道拥堵分析。
    *   **Devices**: 白色线框图标，局域网设备扫描。
3.  **Interaction**: 点击卡片会有 "缩放 (+scale)" 与 "左侧边框高亮" 的反馈效果。

### 2.4 个人中心 (Profile / System Preferences)
**功能**: 用户登录、数据同步与全局设置。

**UI 元素**:
1.  **ID Card Header**: 模拟 ID 卡设计的头部区域。
    *   **Avatar**: 头像框带有动态的水平扫描线动画 (Scan Line)。
    *   **User Info**: 显示 "GUEST USER" 及 "LEVEL 1 ACCESS"。
    *   **Login Button**: 幽灵按钮风格 (Ghost Button)。
2.  **Settings List**:
    *   **Dark Mode**: 默认开启且锁定 (强制暗黑风格)。
    *   **Notifications**: 开关控件 (Toggle Switch) 样式定制为矩形滑块。
    *   **Auto-Backup**: 云端同步开关。
    *   **Version Info**: 底部显示版本号，采用 Monospace 字体。

---

## 3. 未来扩展规划 (Future Roadmap)

*   **Mobile App**: 使用 Capacitor/Cordova 封装 Web 内容，调用原生 WiFi API 实现真正的扫描连接。
*   **WebAssembly**: 引入 Rust/C++ 模块进行高性能的加密安全性运算。
*   **Cloud Sync**: 用户登录后同步 WiFi 密码本（需加密存储）。

---
**Document Status**: `v1.0` | **Last Updated**: `2026-02-05`
