# Not So Far — API

Go HTTP server. Serves solar system body data from a local JSON file.

## Running Locally

```
make dev
```

Starts the server on `:8080` with `ALLOW_ORIGIN` set to `http://localhost:5173` (the default Vite dev server URL), which is required for CORS.
