# Privacy

ctrldlogin is designed with privacy as a core principle. This page explains what data the application stores, what it communicates externally, and how you can control it.

## Local Data Storage

All profile data is stored **locally on your machine**. The application does not upload your profiles, fingerprints, cookies, proxy credentials, or any other personal data to the cloud.

| Data | Stored Locally | Uploaded |
|------|---------------|----------|
| Profile configurations | ✅ Yes | ❌ No |
| Browser fingerprints | ✅ Yes | ❌ No |
| Cookies | ✅ Yes | ❌ No |
| Proxy credentials | ✅ Yes | ❌ No |
| Browser cache & sessions | ✅ Yes | ❌ No |
| Activity logs | ✅ Yes | ❌ No |

See the [FAQ](/faq) for exact storage locations per operating system.

## Network Communication

The application communicates externally only for the following purposes:

### License Validation
When you activate a license key, the app contacts a Cloudflare Worker to validate the key and determine your license tier (Free, Pro, or Enterprise). This sends:
- License key (hashed)
- A unique installation identifier
- Timestamp of the request

### Anonymous Telemetry
The app collects basic anonymous usage statistics to help improve the product. This is enabled by default but can be disabled.

Telemetry includes:
- App version and operating system type
- Basic feature usage counts (e.g., number of profiles launched, proxies tested)
- Performance metrics (e.g., average launch time)

Telemetry does **not** include:
- Profile names or configurations
- Fingerprint data or seeds
- Cookies or browsing data
- Proxy credentials
- Any personal identifiable information (PII)
- IP addresses or location data

### Update Checks
The app periodically checks for updates to the browser engine by contacting a Cloudflare Worker. This sends:
- Current app version
- Current browser engine version

## Third-Party Services

- **Cloudflare Workers** — Used for license validation, telemetry collection, and update checks. Cloudflare's [privacy policy](https://www.cloudflare.com/privacypolicy/) applies to data processed through their network.
- **GitHub Releases** — The download links for app updates point to GitHub Releases. GitHub's [privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement) applies when downloading updates.
- **Chrome Web Store** — If you import extensions from the Chrome Web Store, the Chrome Web Store's [privacy policy](https://policies.google.com/privacy) applies.

No other third-party services are used. The app does not embed analytics SDKs, tracking pixels, or advertising frameworks.

## Data Control

### Deleting Your Data
To delete all data associated with ctrldlogin:

1. Uninstall the application
2. Delete the data directory for your platform:
   - **Linux:** `rm -rf ~/.local/share/ctrldlogin/`
   - **macOS:** `rm -rf ~/Library/Application\ Support/ctrldlogin/`
   - **Windows:** `rmdir /s %APPDATA%\ctrldlogin\`

### Disabling Telemetry
To disable anonymous telemetry, update the application settings and uncheck the telemetry option. When telemetry is disabled, no usage data is transmitted.

## Contact

If you have questions about this privacy policy or the application's data handling, please open an issue on the [GitHub issue tracker](https://github.com/arkdemiatop/ctrldlogin/issues).
