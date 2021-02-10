'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const redis = require('redis');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

const app = express();
const log_morgan = require('./src/middlewares/morganlog');
const errorHandler = require('./src/middlewares/errorHandler');

const routers = require('./src/routers');
const { router: routerBull } = require('bull-board');

Sentry.init({
    dsn: process.env.dsn_key,
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Tracing.Integrations.Express({ app }),
    ],
    tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(log_morgan);
app.use('/admin/queues', routerBull);
app.use('/api/v1', routers);
app.use(Sentry.Handlers.errorHandler());
errorHandler.forEach(handler => app.use(handler));

module.exports = app
