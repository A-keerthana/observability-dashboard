# Observability Dashboard

## What this repo contains
- A small Node.js microservice instrumented with Prometheus metrics (`/metrics`)
- Docker Compose stack for:
  - Prometheus (scrapes the Node app)
  - Grafana (pre-configured Prometheus datasource)
  - node-exporter (basic host metrics)
- Prometheus alert rules (illustrative)

## How to run (Cloud - Gitpod)
1. Push this repo to GitHub.
2. Open in Gitpod: `https://gitpod.io/#https://github.com/A-keerthana/observability-dashboard`
3. Gitpod will start and run `docker compose up --build -d` (see `gitpod.yml`).
4. Open forwarded ports in Gitpod:
   - Grafana: `3000` (admin/admin)
   - Prometheus: `9090`
   - Node app: `8080`

## Files of interest
- `node-app/` — Node app code and Dockerfile
- `prometheus/` — prometheus.yml and alerts.yml
- `grafana/provisioning/datasources/prometheus.yaml` — auto-adds Prometheus to Grafana
- `docker-compose.yml` — compose stack

## Next steps
- Build & push Node image to Docker Hub (we will do this in Gitpod).
- Deploy an HPA demo using the pushed image on a Kubernetes playground.

