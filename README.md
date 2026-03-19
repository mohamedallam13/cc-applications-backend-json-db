# CC Applications Backend — JSON DB

A Google Apps Script backend that handles application requests using a self-developed ODM (Object-Document Mapper) over a JSON files database stored in Google Drive. Follows a Model/Controller/Route architecture with no relational database dependency.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat&logo=google&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-Backend%20API-blue)
![Pattern](https://img.shields.io/badge/Pattern-MVC%20%2B%20ODM-lightgrey)

---

## Overview

This project demonstrates how to build a structured backend API entirely within Google Apps Script, using Google Drive JSON files as the persistence layer. A custom ODM provides a clean abstraction over raw Drive file operations, and the codebase is organised into Models, Controllers, Routes, and a Server entry point — similar to a Node/Express architecture but running serverlessly on GAS.

---

## Architecture

```
Request → Server.js (router) → Routes/ → Controller/ → ODM/ → JSON-DB/ (Drive)
                                                      ↓
                                                  Models/
```

- **ODM** — abstracts Drive JSON file reads/writes into document operations
- **JSON-DB** — raw Drive file management and index handling
- **Models** — schema definitions for each collection
- **Controller** — business logic for each resource
- **Routes** — maps request paths to controller functions
- **Seeding** — scripts for initialising the database with seed data

---

## Features

- REST-like API served via `doPost()` with route dispatch
- Custom ODM for CRUD operations over Drive-hosted JSON files
- Indexed JSON file storage for efficient lookups
- Model/Controller separation for maintainability
- Seed scripts for database initialisation
- Test utilities for development

---

## Tech Stack

| Layer    | Technology                      |
|----------|---------------------------------|
| Platform | Google Apps Script              |
| Database | JSON files in Google Drive      |
| Pattern  | MVC + custom ODM                |
| Deploy   | clasp CLI                       |

---

## Project Structure

```
cc-applications-backend-json-db/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  # GAS manifest
    ├── Server.js        # Entry point — doGet() / doPost() router
    ├── Testing.js       # Dev test utilities
    ├── ODM/             # Object-Document Mapper core
    ├── JSON-DB/         # Drive file management and indexing
    ├── Models/          # Collection schema definitions
    ├── Controller/      # Business logic per resource
    ├── Routes/          # Route-to-controller mappings
    └── Seeding/         # Database seeding scripts
```

---

## Getting Started

### Prerequisites

- A Google account with Google Apps Script access
- [clasp](https://github.com/google/clasp) installed globally

```bash
npm install -g @google/clasp
clasp login
```

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedallam13/cc-applications-backend-json-db.git
   cd cc-applications-backend-json-db
   ```

2. Link to your Apps Script project:
   ```bash
   clasp create --type webapp --title "CC Applications Backend" --rootDir src
   ```

3. Push source files:
   ```bash
   clasp push
   ```

---

## Deployment

1. In the Apps Script editor, go to **Deploy > New deployment**
2. Select type: **Web app**
3. Set **Execute as**: Me · **Who has access**: Anyone with the link (or restrict)
4. Click **Deploy** — the Web App URL is the API endpoint

---

## Author

**Mohamed Allam** — [GitHub](https://github.com/mohamedallam13) · [Email](mailto:mohamedallam.tu@gmail.com)
