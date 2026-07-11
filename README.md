# Not So Far

A full-stack solar system explorer. The React frontend displays data about planets, moons, asteroids, comets, dwarf planets, and stars — served by a Go API backend with no external dependencies.

## Architecture

```
React Frontend → Go API Server → bodies.json
```

- **Frontend** (`frontend/`) — React + TypeScript, fetches from the Go API and renders it.
- **API** (`api/`) — Go server built on the `net/http` standard library, no framework. Reads `bodies.json` into memory at startup and serves it over `GET /bodies`.
- **Data** (`api/data/bodies.json`) — a self-owned dataset. No calls to any third-party solar system API.

## Quick Start

Run both services in separate terminals:

```bash
cd api && make dev        # starts the Go server on :8080
cd frontend && npm run dev # starts the React app on :5173
```

See [`api/README.md`](api/README.md) and [`frontend/README.md`](frontend/README.md) for setup details.

## Data Notes

All six body types are represented: Planet, Moon, Dwarf Planet, Asteroid, Comet, Star. Where a body's mass, volume, or density isn't reliably established (e.g. a comet nucleus from a single flyby), the field is `null` and the UI marks it with `*` rather than omitting the body.
