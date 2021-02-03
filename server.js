'use strict'

const express = require('express');
const cors = require('cors');
const app = express();
const log_morgan = require('./src/middlewares/morganlog');
const errorHandler = require('./src/middlewares/errorHandler')


const PORT = 3000;
const routers = require('./src/routers');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(log_morgan);
app.use('/api/v1', routers);
errorHandler.forEach(handler => app.use(handler));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});