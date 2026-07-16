# Features

## Profile Management

Create, edit, duplicate, or delete profiles. Track status (idle, running, crashed, paused). Organize with tags and notes, and search everything with full-text search. Perform batch operations — launch, stop, delete, or assign proxies to multiple profiles at once.

- **Full CRUD** — create, read, update, delete profiles
- **Profile cloning** — duplicate with a new fingerprint seed
- **Profile reset** — wipe browser data while keeping the fingerprint
- **Status tracking** — idle, running, crashed, paused
- **Batch operations** — launch/stop/delete/assign proxy to multiple profiles
- **Full-text search** — SQLite FTS5 search across names, notes, tags, and proxies
- **Activity logging** — audit trail for all profile actions
- **Launch history** — count and timestamps per profile

## Browser Fingerprinting

Each profile gets a deterministic fingerprint seed (same name = same fingerprint). Spoof platform, GPU, WebRTC, timezone, locale, language, CPU cores, RAM, screen resolution, audio context, and fonts.

- **Deterministic seeds** — SHA-256 based, persistent per profile name
- **Platform spoofing** — Windows, macOS, Linux with matching GPU strings
- **WebRTC IP spoofing** — automatically matches your proxy exit IP
- **Hardware emulation** — CPU cores, RAM, screen resolution
- **Timezone / locale spoofing** — per-profile configuration
- **Audio context fingerprint** — unique per seed
- **Font normalization** — anti-enumeration
- **Session warm-up** — configure pre-visit sites for natural browsing patterns
- **Fingerprint testing** — one-click test via [browserscan.net](https://browserscan.net)

## Proxy Management

Add, edit, and delete proxy configurations. Test connectivity with latency measurement and external IP resolution. WebRTC IP syncs automatically to your proxy.

- **Proxy CRUD** — full lifecycle management
- **Connectivity testing** — external IP resolution + latency measurement
- **Health monitoring** — status tracking
- **Per-profile assignment** — bind any proxy to any profile
- **Bulk import** — import multiple proxies from text (supports 4 formats)
- **WebRTC IP sync** — automatic matching

## Extensions

Upload CRX/ZIP files or import extensions directly from the Chrome Web Store by URL. Assign extensions per-profile and enable/disable individually.

- **CRX/ZIP upload** — custom extension support
- **Chrome Web Store import** — import by URL
- **Per-profile assignment** — enable/disable per profile
- **Extension metadata** — icons, descriptions, versions

## Organization

Group profiles in folders, save and load profile configurations with templates, and use keyboard shortcuts and context menus for power-user workflows.

- **Folder system** — organize profiles into folders
- **Template system** — save/load profile configurations as presets
- **Tag system** — color-coded profile tags
- **Multi-select** — bulk operations across profiles
- **Context menus** — quick actions
- **Keyboard shortcuts** — power-user navigation

## Interface

Modern dark/light themed UI with a three-panel layout (folders, profiles, details). Real-time updates via WebSocket.

- **Vue 3 SPA** — component-based architecture
- **Three-panel layout** — folders sidebar, profile list, detail panel
- **Real-time updates** — WebSocket-based live status
- **Dark/light themes** — user preference
- **Responsive design** — works across screen sizes
