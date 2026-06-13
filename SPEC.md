# Not So Far

A full-stack solar system explorer. The React frontend displays data about planets, moons, asteroids, comets, dwarf planets, and stars. Data is served by a Go HTTP server that reads a self-owned JSON file at startup — no external API dependency.

---

## Architecture

```
React Frontend → Go API Server → bodies.json
```

---

## Components

| Component | What it does | Hard part |
|---|---|---|
| React frontend | Displays solar system body data, handles filtering and pagination | Already built — minimal changes needed |
| Go API server | Reads `bodies.json` at startup, serves `GET /bodies` with CORS headers | Working with `net/http` standard library without a framework |
| `bodies.json` | Self-owned dataset covering all body types | Sourcing complete, accurate data from authoritative references |

---

## Done When

- Go server runs locally and responds to `GET /bodies`
- Response shape matches the `CelestialBody` type the React frontend already expects
- React app fetches from the Go server with no console errors
- All six body types represented: Planet, Moon, Dwarf Planet, Asteroid, Comet, Star
- No calls to `le-systeme-solaire` anywhere in the codebase
- Bodies with unavailable `mass`, `vol`, or `density` are included with null values; the UI renders a `*` indicator and explains the omission in a visible location on the page
- Data sourced from authoritative references (NASA JPL, IAU, etc.)
- Root README explains the architecture clearly enough for a recruiter to understand at a glance

---

## Explicitly Out of Scope

- Database — `bodies.json` is the data layer for now
- User authentication
- 3D visualization
- Images or photography for individual bodies
