# Backlog

Open decisions and questions that need to be answered before work begins on the phase they affect.

---

## Phase 3 — Seed Script Decisions

These must be resolved before building the data ingestion script.

- [ ] **Invocation:** Should the script be a CLI (`go run cmd/seed/main.go`) or a Makefile target (`make seed`)? Answer affects where it lives in the repo.

- [ ] **Concurrency model:** One goroutine per source (2 goroutines — one for NASA JPL, one for IAU, merge results) or one goroutine per body (N goroutines, fan-in via channel)? Determines whether the design is WaitGroup, channel fan-in, or both.

- [ ] **Conflict resolution:** If NASA JPL and IAU return different values for the same body, what wins? Prefer one source? Merge by field? Log conflicts for manual review?

- [ ] **Output behavior:** When the script runs, does it overwrite `bodies.json` entirely or append to what's already there?
