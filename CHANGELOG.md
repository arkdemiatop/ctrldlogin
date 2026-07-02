# Changelog

All notable changes to CloakManager will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Vue 3 + Vite frontend with modern component-based architecture
- WebSocket support for real-time profile status updates
- Extensions management system with CRX/ZIP upload
- Chrome Web Store extension import via URL
- Per-profile extension assignment and management
- Folder system for profile organization
- Template system for saving and loading profile configurations
- Full-text search across profiles using SQLite FTS5
- Batch operations for profiles (launch, stop, delete, proxy assignment)
- Activity logging for all profile actions
- Profile consistency validation and cleanup tools
- Multi-select with bulk actions support
- Context menus for quick profile actions
- Keyboard shortcuts for power users

### Changed
- Migrated from Flask to FastAPI for better async support
- Upgraded from vanilla HTML/JS to Vue 3 SPA
- Improved error handling with detailed error messages
- Enhanced proxy testing with external IP resolution
- Optimized database queries with proper indexing
- Better memory management with context managers
- Improved build process with Nuitka compilation

### Fixed
- Fixed Nuitka compilation issues with async context managers
- Resolved database constraint violations in profile status updates
- Fixed frontend API path construction for production builds
- Resolved WebSocket dynamic port detection
- Fixed proxy bypass handling in profile configurations
- **Windows:** Fixed DLL loading issue where backend.exe crashed on startup with `python311.dll not found` (exit code -1073741515)
  - Changed Tauri resources from glob pattern to object notation to preserve subdirectories
  - Build script now copies all dependencies flat to binaries root
  - See `src-tauri/README.md` for comprehensive technical documentation
  - Commits: a85c687, 235ef78, 288c3c6, b7da06d
- **Worker:** Fixed Cloudflare bot detection blocking telemetry pings (HTTP 403, error 1010)
  - Added custom User-Agent header (`CloakManager/0.1.0`) to worker ping requests
  - Python's default `urllib` User-Agent was being blocked by Cloudflare
  - See `backend/core/config.py` - `ping_worker()` function

### Technical
- Backend: FastAPI + SQLite + aiosqlite
- Frontend: Vue 3 + Vite + Pinia
- Desktop: Tauri 2.0 + Rust
- Build: Nuitka (Python) + Cargo (Rust)
- Total binary size: ~89 MB (CloakBrowser downloaded separately)

---

## [0.1.0] - 2024-05-17

### Added
- Initial release of CloakManager
- Core profile management (CRUD operations)
- CloakBrowser integration with anti-detect fingerprinting
- Proxy management with connectivity testing
- Cookie import/export functionality
- Profile cloning with new fingerprint generation
- Profile reset for data wiping
- Tag system for profile organization
- Notes field for profile metadata
- Launch history tracking
- Basic UI with three-panel layout
- SQLite database with WAL mode
- Fingerprint seed generation and storage
- Platform spoofing (Windows, macOS, Linux)
- GPU string spoofing per platform
- WebRTC IP spoofing based on proxy
- Session warmup with configurable sites
- Fingerprint testing integration (browserscan.net)

### Architecture
- Tauri 2.0 desktop shell
- Python FastAPI backend
- Vue 3 frontend
- SQLite database with FTS5
- CloakBrowser engine integration

### Known Limitations
- No team collaboration features
- No workflow automation
- No persistent settings system
- Extensions management in early stages

---

## [Future Versions]

### [1.1.0] - Planned
- Settings and preferences system
- Persistent user configurations
- Theme customization options
- Enhanced import/export functionality
- Performance optimizations

### [1.2.0] - Planned
- Teams and collaboration features
- Multi-user access control
- Role-based permissions
- Shared profile access
- Team usage analytics

### [2.0.0] - Planned
- Automation engine with rule-based workflows
- Cron scheduling for profile launches
- Webhook integrations and notifications
- API access for programmatic control
- Advanced automation rules

---

## Version Summary

| Version | Date | Status | Key Features |
|---------|------|--------|--------------|
| 0.1.0 | 2024-05-17 | ✅ Released | Core profile management, proxy integration, basic UI |
| 1.0.0 | TBD | 🚧 Current | Extensions, folders, templates, Vue 3 UI, WebSocket |
| 1.1.0 | TBD | 📋 Planned | Settings system, enhanced customization |
| 1.2.0 | TBD | 📋 Planned | Teams collaboration, multi-user support |
| 2.0.0 | TBD | 📋 Planned | Automation engine, API access, workflows |

---

## Support

For issues, questions, or suggestions, please use the GitHub issue tracker.
