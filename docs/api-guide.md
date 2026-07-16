# API Reference

The backend exposes a REST API and WebSocket server. All endpoints return JSON and support optional Bearer token authentication via `Authorization: Bearer <token>` header.

**Base URL (development):** `http://127.0.0.1:7331/api`  
**Base URL (production):** Dynamic port (auto-detected)  
**Auto-generated docs:** Swagger UI at `/docs`, ReDoc at `/redoc`

---

## Profiles

**25 endpoints** for managing browser profiles.

### CRUD Operations

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/api/profiles` | List all profiles with computed status fields |
| `POST` | `/api/profiles` | Create new profile with fingerprint config |
| `PUT` | `/api/profiles/{name}` | Update existing profile configuration |
| `DELETE` | `/api/profiles/{name}` | Permanently delete profile and data directory |
| `GET` | `/api/profiles/search` | Full-text search (FTS5) by name, notes, tags, proxy |
| `GET` | `/api/profiles/{name}/activity` | Get profile activity log |

### Lifecycle Management

| Method | Path | Purpose |
|--------|------|---------|
| `POST` | `/api/profiles/{name}/launch` | Launch browser with proxy test and crash monitoring |
| `POST` | `/api/profiles/{name}/stop` | Gracefully stop running browser process |
| `POST` | `/api/profiles/{name}/pause` | Save session snapshot and stop browser |
| `POST` | `/api/profiles/{name}/resume` | Restore session snapshot and launch browser |
| `POST` | `/api/profiles/{name}/reset` | Wipe browser data directory |
| `POST` | `/api/profiles/{name}/clone` | Duplicate profile with new fingerprint seed |
| `POST` | `/api/profiles/{name}/fingerprint-test` | Get fingerprint testing URLs |

### Cookie Management

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/api/profiles/{name}/cookies/export` | Export cookies as JSON array |
| `POST` | `/api/profiles/{name}/cookies/import` | Import cookies from JSON array |

### Batch Operations

| Method | Path | Purpose |
|--------|------|---------|
| `POST` | `/api/profiles/batch/launch` | Launch multiple profiles simultaneously |
| `POST` | `/api/profiles/batch/stop` | Stop multiple running profiles |
| `POST` | `/api/profiles/batch/delete` | Delete multiple profiles |
| `POST` | `/api/profiles/batch/proxy` | Assign/remove proxy from multiple profiles |
| `POST` | `/api/profiles/batch/tag` | Add or remove tags on multiple profiles |

### Trash / Soft Delete

| Method | Path | Purpose |
|--------|------|---------|
| `PUT` | `/api/profiles/{name}/trash` | Move profile to trash (soft delete) |
| `POST` | `/api/profiles/{name}/restore` | Restore profile from trash |
| `GET` | `/api/profiles/trash` | List all profiles in trash |
| `DELETE` | `/api/profiles/trash` | Permanently delete all trashed profiles |

---

## Proxies

**6 endpoints** for proxy configuration and testing.

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/api/proxies` | List all proxy configurations |
| `POST` | `/api/proxies` | Create new proxy configuration |
| `PUT` | `/api/proxies/{id}` | Update existing proxy |
| `DELETE` | `/api/proxies/{id}` | Delete proxy configuration |
| `POST` | `/api/proxies/{id}/test` | Test connectivity and resolve external IP |
| `POST` | `/api/proxies/bulk-import` | Import multiple proxies from text |

---

## Extensions

**4 endpoints** for extension library management.

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/api/extensions` | List all extensions with metadata |
| `POST` | `/api/extensions/upload` | Upload CRX/ZIP file |
| `POST` | `/api/extensions/import-from-store` | Import from Chrome Web Store URL |
| `DELETE` | `/api/extensions/{id}` | Delete extension and remove from all profiles |

---

## Folders

**5 endpoints** for profile organization.

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/api/folders` | List all folders with profile counts |
| `GET` | `/api/folders/{id}` | Get single folder details |
| `POST` | `/api/folders` | Create new folder |
| `PUT` | `/api/folders/{id}` | Update folder name or order index |
| `DELETE` | `/api/folders/{id}` | Delete folder |

---

## Templates

**4 endpoints** for reusable profile configurations.

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/api/templates` | List all fingerprint templates |
| `GET` | `/api/templates/{id}` | Get single template configuration |
| `POST` | `/api/templates` | Save current config as template |
| `DELETE` | `/api/templates/{id}` | Delete template |

---

## System

**4 endpoints** for system status and maintenance.

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/api/system` | Get browser engine version and status |
| `GET` | `/api/running` | List currently running profile names |
| `POST` | `/api/system/check-updates` | Check for browser engine updates |
| `POST` | `/api/system/clear-cache` | Clear browser engine cache |

---

## WebSocket

**Real-time events** for profile lifecycle updates.

| URL | Purpose |
|-----|---------|
| `ws://127.0.0.1:7331/ws/{client_id}` | Real-time profile lifecycle events |

### Events

| Event | Triggered | Key Fields |
|-------|-----------|------------|
| `connected` | Client connects | `client_id` |
| `launch_start` | Launch initiated | `profile`, `timestamp` |
| `launch_progress` | Stage updates | `profile`, `stage`, `message` |
| `launch_complete` | Launch successful | `profile`, `pid`, `fp_seed` |
| `profile_crashed` | Crashed within 15s | `profile`, `exit_code` |
| `profile_stopped` | Browser stopped | `profile`, `timestamp` |
| `profile_paused` | Profile paused | `profile`, `snapshot` |
| `profile_resumed` | Profile resumed | `profile`, `pid` |
| `profile_created` | New profile | `profile`, `os`, `fp_seed` |
| `profile_updated` | Config modified | `profile`, `updated_fields` |
| `profile_deleted` | Profile deleted | `profile`, `timestamp` |
| `profile_reset` | Data wiped | `profile`, `timestamp` |
| `profile_cloned` | Profile duplicated | `source_profile`, `new_profile` |
| `proxy_tested` | Test completed | `proxy`, `ok`, `ms`, `ip` |
| `proxy_created` | New proxy | `proxy`, `label`, `host`, `port` |
| `proxy_updated` | Proxy modified | `proxy`, `updated_fields` |
| `proxy_deleted` | Proxy deleted | `proxy`, `timestamp` |
| `extension_uploaded` | File uploaded | `extension`, `name`, `source` |
| `extension_imported` | Web Store import | `extension`, `name`, `url` |
| `extension_deleted` | Extension deleted | `extension`, `timestamp` |
| `folder_created` | New folder | `folder`, `name` |
| `folder_updated` | Folder modified | `folder`, `data` |
| `folder_deleted` | Folder deleted | `folder`, `timestamp` |
