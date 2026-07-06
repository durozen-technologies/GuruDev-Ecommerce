# GuruDev E-Commerce System Architecture

## Architectural Changes Log
*Note: Each time the architecture changes, append the change in this section with a timestamp. NEVER overwrite the historical architecture.*

### [2026-07-06 10:00:00] Initial Vite React Architecture
- **Frontend**: Vite + React + TypeScript setup.
- **Styling**: Tailwind CSS v4.

## Code Files & Folders Structure

```text
GuruDev E-Commerce (Root)
├── src/                      # Application source code
│   ├── components/           # Reusable components
│   ├── context/              # Context Providers (AppContext)
│   ├── views/                # Page Views (Home, Shop, Product)
│   ├── App.tsx               # Main Application Component
│   ├── data.ts               # Product Catalog Data
│   └── index.css             # Tailwind directives and custom CSS
├── package.json              # Node dependencies
├── vite.config.ts            # Vite configuration
└── .core/                    # Project Documentation & Rules
```

## Application Type
Single Page Application (SPA) for E-Commerce.

## Stack Overview
- **Frontend Runtime:** Node.js, Vite, React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
