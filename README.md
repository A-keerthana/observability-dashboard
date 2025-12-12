# Observability Dashboard

## What this repo contains
- A small Node.js microservice instrumented with Prometheus metrics (`/metrics`)
- Docker Compose stack for:
  - Prometheus (scrapes the Node app)
  - Grafana (pre-configured Prometheus datasource)
  - node-exporter (basic host metrics)
- Prometheus alert rules (illustrative)

<img width="1910" height="1091" alt="3bb7bbe5-3a64-469b-9196-31e921012cdc" src="https://github.com/user-attachments/assets/738cbf8b-0357-4c16-8d6e-c56093134044" />


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

  
<img width="956" height="1090" alt="b9d6b318-f504-4343-a907-d14058b218d1" src="https://github.com/user-attachments/assets/fefd2bc7-900f-4a9e-af93-1d1f4ca59dfa" />

<img width="1919" height="1099" alt="b055f1b0-7872-4dff-933f-7623c18f6886" src="https://github.com/user-attachments/assets/1eb1e277-f1bb-487c-8924-05bf685a78f2" />

<img width="932" height="1140" alt="1b4f681f-2ed6-45ab-8abf-74e50f5339e1" src="https://github.com/user-attachments/assets/a66deaab-783d-4017-a0b2-287cbccb6bc3" />

<img width="1918" height="995" alt="95ba2131-15c4-4f1d-847e-96ca2d6439e2" src="https://github.com/user-attachments/assets/6d2dc520-2d88-4bdd-ac15-6b4ddbaf3403" />

## Next steps
- Build & push Node image to Docker Hub (we will do this in Gitpod).
- Deploy an HPA demo using the pushed image on a Kubernetes playground.

