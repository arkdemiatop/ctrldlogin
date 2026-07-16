# FAQ

## General

### Where are my profiles and data stored?

Profiles, configurations, and browser data are stored locally on your machine in the following locations:

| Platform | Data Directory |
|----------|---------------|
| Linux | `~/.local/share/ctrldlogin/` |
| macOS | `~/Library/Application Support/ctrldlogin/` |
| Windows | `%APPDATA%/ctrldlogin/` |

You can back up or migrate profiles by copying the entire directory.

### How do I uninstall?

**Linux (AppImage):** Delete the AppImage file and the data directory at `~/.local/share/ctrldlogin/`.

**Linux (deb):** Run `sudo apt remove ctrldlogin`, then delete the data directory.

**macOS:** Drag the app from Applications to Trash, then delete `~/Library/Application Support/ctrldlogin/`.

**Windows:** Go to **Settings → Apps → Installed apps**, find ctrldlogin and uninstall, or delete the portable `.exe` and `%APPDATA%/ctrldlogin/` directory.

### Can I use ctrldlogin without a proxy?

Yes. Fingerprinting works independently of proxies. Each profile gets a unique deterministic fingerprint regardless of whether a proxy is assigned. Proxies are optional and useful when you need to match the browser's IP address with the fingerprint's geographic profile.

### Can I run multiple profiles at the same time?

Yes. Each profile runs as its own isolated browser process. You can launch as many profiles as your system resources allow. Each profile has its own fingerprint, cookies, cache, and session data.

### Does the app work on my platform?

ctrldlogin supports Windows 10/11, macOS 12+, and Linux (glibc 2.31+). See the [getting started guide](/getting-started#system-requirements) for detailed requirements.

---

## Installation & Setup

### First launch is slow — is this normal?

Yes. The first time you launch ctrldlogin, it downloads the browser engine (~200 MB). This is a one-time download. Subsequent launches will be much faster.

### macOS says the app is from an unidentified developer

The app is not notarized by Apple. To open it:
1. Open **System Settings → Privacy & Security**
2. Scroll down to the **Security** section
3. Click **Open Anyway** next to the ctrldlogin message
4. Confirm in the dialog

You only need to do this once.

### macOS — which download should I choose?

- **`_aarch64.dmg`** — for Apple Silicon Macs (M1, M2, M3, M4)
- **`_amd64.dmg`** — for Intel-based Macs

### The browser engine download fails or is stuck

Check your firewall or VPN — the download requires access to the browser engine CDN. If it consistently fails, try:
- Disabling VPN temporarily
- Checking disk space (500 MB+ required)
- Running the app with administrator privileges on Windows

### How do I update ctrldlogin?

Currently updates are manual. Download the latest release from the [Releases page](https://github.com/arkdemiatop/ctrldlogin/releases) and install it over your existing installation. Your profiles and data will be preserved since they're stored in a separate data directory (see above).

---

## Profiles

### A profile won't launch or crashes immediately

Check the logs for error messages:

| Platform | Log location |
|----------|-------------|
| Linux | `~/.local/share/ctrldlogin/logs/` |
| macOS | `~/Library/Application Support/ctrldlogin/logs/` |
| Windows | `%APPDATA%/ctrldlogin/logs/` |

Common causes:
- Proxy connection failed (try launching without proxy)
- Browser engine not fully downloaded (re-launch the app)
- Insufficient disk space
- Antivirus blocking browser processes

### How do I transfer profiles to another computer?

1. Locate your data directory (see above)
2. Copy the entire `ctrldlogin` folder to the same path on the new machine
3. Install ctrldlogin on the new machine
4. Launch the app — your profiles will appear

Make sure the same profile names are used, as fingerprints are derived from profile names.

### Can I recover a deleted profile?

If you used the **Trash** feature (soft delete), you can restore it from the trash. If permanently deleted, check whether you have a backup of the data directory.

---

## Fingerprinting

### How is my fingerprint generated?

Each profile's fingerprint is deterministically generated from its name using a cryptographic hash. This means the same profile name always produces the same fingerprint. Changing the profile name will generate a completely new fingerprint.

### Is the fingerprint consistent across browser sessions?

Yes. The same profile will always produce the same fingerprint (same name = same seed). This is intentional — it makes each profile a consistent, reusable identity.

### Can I verify my fingerprint is working?

Launch a profile and visit [browserscan.net](https://browserscan.net) to see what websites detect about your browser. You can do this directly from the app via the **Fingerprint Test** button.

---

## Troubleshooting

### The app won't start

- **Linux:** Ensure the AppImage is executable (`chmod +x`), or that dependencies for `.deb` are satisfied
- **macOS:** Check Gatekeeper settings (see above)
- **Windows:** Try running as administrator; check Windows Defender hasn't quarantined files

### A proxy is not working

- Verify the proxy credentials are correct
- Test the proxy using the built-in connectivity test in the Proxies section
- Ensure the proxy protocol matches (HTTP or SOCKS5)
- Check that the proxy server is reachable from your network

### I found a bug — how do I report it?

Open an issue on the [GitHub issue tracker](https://github.com/arkdemiatop/ctrldlogin/issues). Include:
- Your operating system and version
- The ctrldlogin version you're using
- Steps to reproduce the issue
- Any relevant log files
