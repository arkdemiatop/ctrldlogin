# Features

## Profile Management

**Full control over your browser profiles.** Create, edit, duplicate, or delete profiles with status tracking (idle, running, crashed, paused). Organize with tags and notes, and search everything with full-text search. Perform batch operations across multiple profiles at once.

- **Full CRUD** — create, read, update, delete profiles
- **Profile cloning** — duplicate with a new fingerprint seed
- **Profile reset** — wipe browser data while keeping the fingerprint
- **Status tracking** — idle, running, crashed, paused
- **Batch operations** — launch, stop, delete, or assign proxies to multiple profiles at once
- **Full-text search** — search across profile names, notes, tags, and proxy labels
- **Activity logging** — full audit trail for all profile actions
- **Launch history** — count and timestamps per profile

---

## Browser Fingerprinting

**Every profile gets a unique, deterministic fingerprint.** Same profile name always produces the same fingerprint. Spoof platform, GPU, WebRTC, timezone, locale, language, CPU cores, RAM, screen resolution, audio context, and fonts.

- **Deterministic seeds** — SHA-256 based, persistent per profile name
- **Platform spoofing** — Windows, macOS, Linux with matching GPU strings
- **WebRTC IP spoofing** — automatically matches your proxy exit IP
- **Hardware emulation** — CPU cores, RAM, screen resolution
- **Timezone / locale spoofing** — per-profile configuration
- **Audio context fingerprint** — unique per seed
- **Font normalization** — anti-enumeration patches
- **Session warm-up** — configure pre-visit sites for natural browsing patterns
- **Fingerprint testing** — one-click test via [browserscan.net](https://browserscan.net)

---

## Proxy Management

**Add, edit, and test proxies per-profile.** Each profile can have its own proxy. Test connectivity with latency measurement and external IP resolution. WebRTC IP automatically syncs to your proxy.

- **Proxy CRUD** — full lifecycle management
- **Connectivity testing** — external IP resolution + latency measurement
- **Health monitoring** — status tracking and alerts
- **Per-profile assignment** — bind any proxy to any profile
- **Bulk import** — import multiple proxies from text (supports 4 formats)
- **WebRTC IP sync** — automatic matching

### Bulk Import Formats

```
protocol://host:port:username:password
host:port or host:port:user:pass
JSON object (one per line)
label,protocol,host,port,username,password
```

---

## Extensions

**Load custom extensions into any profile.** Upload CRX/ZIP files or import extensions directly from the Chrome Web Store by URL. Assign extensions per-profile and enable/disable them individually.

- **CRX/ZIP upload** — custom extension support
- **Chrome Web Store import** — import by URL
- **Per-profile assignment** — enable/disable per profile
- **Extension metadata** — icons, descriptions, versions

---

## Organization

**Keep your profiles organized.** Group profiles in folders, save and load configurations with templates, use tags for quick filtering, and power through workflows with keyboard shortcuts and context menus.

- **Folder system** — organize profiles into folders
- **Template system** — save/load profile configurations as presets
- **Tag system** — color-coded profile tags
- **Multi-select** — bulk operations across profiles
- **Context menus** — quick actions for power users
- **Keyboard shortcuts** — navigate and manage faster

---

## Interface

**Modern, responsive UI with real-time updates.** Three-panel layout with folders sidebar, profile list, and detail panel. Dark and light themes. Live status updates without page refresh.

- **Three-panel layout** — folders sidebar, profile list, detail panel
- **Real-time updates** — live status changes without refreshing
- **Dark/light themes** — switch to your preference
- **Responsive design** — works across screen sizes
