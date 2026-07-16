<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/arkdemiatop/ctrldlogin/main/assets/logo-dark.svg">
    <img alt="ctrldlogin" src="https://raw.githubusercontent.com/arkdemiatop/ctrldlogin/main/assets/logo-light.svg" width="480">
  </picture>
</p>

<p align="center">
  <strong>Desktop application for managing multiple isolated browser profiles with unique fingerprints.</strong>
</p>

<p align="center">
  <a href="https://github.com/arkdemiatop/ctrldlogin/releases"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/arkdemiatop/ctrldlogin?style=flat-square"></a>
  <a href="https://github.com/arkdemiatop/ctrldlogin/releases"><img alt="Platform" src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue?style=flat-square"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/github/license/arkdemiatop/ctrldlogin?style=flat-square"></a>
  <a href="https://arkdemiatop.github.io/ctrldlogin/"><img alt="Docs" src="https://img.shields.io/badge/docs-vitepress-blue?style=flat-square"></a>
</p>

---

**ctrldlogin** lets you create, manage, and launch multiple isolated browser profiles — each with a unique digital fingerprint. It handles proxy integration, platform spoofing, and anti-detection so every session looks like a real, distinct device.

**Perfect for:**
- Privacy-conscious users managing multiple identities
- Freelancers handling client accounts
- QA testers needing isolated browser environments
- Anyone who needs separate browser profiles with distinct fingerprints

---

## Download

Get the latest builds on the [Releases page](https://github.com/arkdemiatop/ctrldlogin/releases).

| Platform | Format | Size |
|----------|--------|------|
| Linux | `.AppImage`, `.deb` | ~89 MB |
| macOS | `.dmg`, `.app` | ~89 MB |
| Windows | `.msi`, `.exe` | ~89 MB |

> The browser engine is downloaded automatically on first launch (~200 MB).

---

## Features

### Profile Management
Create, edit, duplicate, or delete profiles. Track status (idle, running, crashed, paused). Organize with tags and notes. Search everything with full-text search. Launch, stop, delete, or assign proxies to multiple profiles at once. Full audit trail of all actions.

### Browser Fingerprinting
Each profile gets a deterministic fingerprint seed (same name = same fingerprint). Spoof platform (Windows, macOS, Linux) with matching GPU strings. WebRTC IP auto-matches your proxy exit IP. Emulate CPU cores, RAM, screen resolution, timezone, locale, and language. Audio context fingerprinting and font normalization included. Configurable session warm-up pages and one-click fingerprint testing via [browserscan.net](https://browserscan.net).

### Proxy Management
Add proxies and assign them per-profile. Test connectivity with latency measurement and external IP resolution. WebRTC IP syncs automatically to your proxy.

### Extensions
Upload CRX/ZIP files or import extensions directly from the Chrome Web Store by URL. Assign extensions per-profile and enable/disable individually.

### Organization
Group profiles in folders. Save and load profile configurations with templates. Keyboard shortcuts and context menus for power users.

### Interface
Modern dark/light themed UI with a three-panel layout (folders, profiles, details). Real-time updates via WebSocket.

---

## Quick Start

1. Download the appropriate package for your OS from the [Releases page](https://github.com/arkdemiatop/ctrldlogin/releases)
2. Install and launch the application
3. Create your first profile and configure its fingerprint
4. Assign a proxy (optional) and launch the profile

See the [Getting Started Guide](docs/getting-started.md) for a detailed walkthrough.

---

## Documentation

Full documentation at **[arkdemiatop.github.io/ctrldlogin](https://arkdemiatop.github.io/ctrldlogin/)**

- [Getting Started Guide](docs/getting-started.md)
- [Feature Overview](docs/features.md)
- [API Reference](docs/api-guide.md)
- [Changelog](CHANGELOG.md)

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

<p align="center"><em>This application is intended for legitimate privacy and testing purposes only.</em></p>
