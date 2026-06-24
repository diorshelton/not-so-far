# Phases

## Phase 1 — Go Server Skeleton ✅
Initialize the Go module, write a minimal HTTP server using `net/http`, read `bodies.json` into memory at startup, and serve `GET /bodies` with CORS headers. Use 2–3 placeholder entries in `bodies.json` covering different body types.

**Done when:** `curl http://localhost:8080/bodies` returns valid JSON matching the `CelestialBody` schema with no errors.

---

## Phase 2 — Frontend Integration
Update the React app to fetch from the local Go server instead of the Vercel proxy. Remove all references to `le-systeme-solaire` and the proxy URL. Add the `*` indicator and explanatory note for bodies with null fields.

**Done when:** The React app runs locally, fetches from `http://localhost:8080/bodies`, and renders data with no console errors. Bodies with null fields display a `*`.

---

## Phase 3 — Data Population
Source and populate `bodies.json` with all six body types using authoritative references (NASA JPL, IAU, Wikipedia). Include bodies with incomplete data as null fields rather than omitting them.

**Done when:** `bodies.json` contains at least one entry for each of the six body types, all entries have `id`, `englishName`, and `bodyType`, and any null `mass`/`vol`/`density` values are intentional and documented in a source comment.

---

## Phase 4 — Cleanup & Documentation
Remove the legacy Vercel proxy project references, update all READMEs to reflect the final architecture, and ensure the root README explains the project clearly enough for a recruiter to understand at a glance.

**Done when:** No references to `le-systeme-solaire` or the Vercel proxy exist anywhere in the codebase, and the root README accurately describes the full-stack architecture.
