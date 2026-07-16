# Getting Started

## System Requirements

| Platform | Minimum Requirements |
|----------|---------------------|
| **Linux** | Ubuntu 20.04+, Fedora 38+, or equivalent; glibc 2.31+ |
| **macOS** | macOS 12 Monterey or newer |
| **Windows** | Windows 10 1809+ or Windows 11 |
| **All** | 4 GB RAM, 500 MB disk space (plus ~200 MB for browser engine on first launch) |

## Download

Download the latest release for your platform from the [Releases page](https://github.com/arkdemiatop/ctrldlogin/releases).

| Platform | Format | Size |
|----------|--------|------|
| Linux | `.AppImage` or `.deb` | ~89 MB |
| macOS | `.dmg` or `.app` | ~89 MB |
| Windows | `.msi` or `.exe` | ~89 MB |

> The browser engine (~200 MB) is downloaded automatically on first launch.

## Installation

### Linux

**AppImage:**
```bash
chmod +x ctrldlogin-*.AppImage
./ctrldlogin-*.AppImage
```

**Debian/Ubuntu (deb):**
```bash
sudo dpkg -i ctrldlogin-*.deb
```

### macOS

Open the `.dmg` file and drag the app to your Applications folder.

> **Note:** macOS may require you to approve the app in System Settings → Privacy & Security before first launch.

### Windows

Run the `.msi` installer or extract the `.exe` portable version.

## First Launch

1. Launch the application
2. The browser engine will download automatically on first launch (~200 MB)
3. Create your first profile:
   - Click **"New Profile"**
   - Give it a name (the name determines its fingerprint)
   - Select a platform to spoof (Windows, macOS, or Linux)
   - Save the profile
4. Click **Launch** to start the browser

### Optional: Configure a Proxy

1. Go to the **Proxies** section
2. Click **"Add Proxy"** and enter your proxy details
3. Assign the proxy to your profile
4. The browser's WebRTC IP will automatically match your proxy

## Verify Your Fingerprint

Launch a profile and visit [browserscan.net](https://browserscan.net) to verify your browser fingerprint is properly spoofed.

## Next Steps

- Explore [all features](/features)
- Read the [API reference](/api-guide) for programmatic control
- Check the [changelog](/changelog) for what's new
