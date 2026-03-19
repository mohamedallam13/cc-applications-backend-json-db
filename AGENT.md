# AGENT.md — cc-applications-backend-json-db

## Purpose
A pure Google Apps Script backend that handles application requests using a self-developed ODM (Object-Document Mapper) over a JSON files DB stored in Google Drive. Follows a Model/Controller architecture.

## Structure
```
cc-applications-backend-json-db/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  ← GAS manifest
    ├── Server.js        ← doGet() / doPost() entry point / router
    ├── Testing.js       ← test utilities
    ├── ODM/             ← Object-Document Mapper (core DB abstraction)
    ├── JSON-DB/         ← raw JSON data files / Drive file management
    ├── Models/          ← data models (schema definitions)
    ├── Controller/      ← business logic controllers
    ├── Routes/          ← route handlers
    └── Seeding/         ← DB seeding scripts
```

## Key Facts
- **Platform:** Google Apps Script (no WebApp UI — pure backend / API)
- **Data store:** JSON files in Google Drive (managed by custom ODM)
- **Pattern:** MVC-style with a custom ODM layer
- **Entry point:** `Server.js` → `doPost()` (REST-like API)

## Development Notes
- All source files live under `src/` — push with clasp from that directory
- No Node/npm at runtime; ES5-compatible GAS code only
