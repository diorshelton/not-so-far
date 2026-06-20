# Commit Gate

## Code

- [ ] Code compiles without errors (`go build ./...`)
- [ ] Server starts successfully
- [ ] `GET /bodies` returns valid JSON matching the `CelestialBody` schema
- [ ] No hardcoded secrets or URLs — environment-sensitive values use env vars
- [ ] No references to `le-systeme-solaire` or the Vercel proxy added

## Scope

- [ ] This commit represents one focused unit of work
- [ ] Commit message follows conventional commits format (`feat:`, `fix:`, `chore:`, `docs:`)

## Documentation

- [ ] Any new functions or non-obvious behavior has a comment explaining *why*, not *what*
- [ ] If `SPEC.md` or `PHASES.md` is affected by this change, it has been updated
