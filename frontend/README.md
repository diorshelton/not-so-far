# Not So Far — Frontend

A visual interface for exploring solar system bodies, built with React and TypeScript. Fetches data from the [Not So Far API](../api/README.md) — a local Go server that serves a self-owned dataset.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **UI Components:** Radix UI
- **Component Development:** Storybook

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

The app expects the Go API to be running at `http://localhost:8080`. See the [api README](../api/README.md) for setup instructions.

## Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run storybook  # Run Storybook
```

## Project Structure

```
frontend/
├── src/
│   ├── components/   # React components
│   ├── stories/      # Storybook stories
│   └── App.tsx       # Root component and data fetching
├── .storybook/       # Storybook configuration
└── index.html
```
