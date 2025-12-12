const express = require('express');
const client = require('prom-client');
const pino = require('pino');
const logger = pino();

const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

const httpRequestDurationSeconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.01, 0.05, 0.1, 0.3, 1, 2, 5]
});

app.get('/', (req, res) => {
  const end = httpRequestDurationSeconds.startTimer();
  logger.info({ route: '/', msg: 'root hit' });
  // simulate variable work
  setTimeout(() => {
    end({ method: req.method, route: req.route ? req.route.path : '/', code: 200 });
    res.send('Hello from monitored Node service!');
  }, Math.random() * 300);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } catch (ex) {
    res.status(500).end(ex);
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  logger.info(`Node app listening on ${port}`);
});
