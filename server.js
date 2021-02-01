'use strict'

const express = require('express');
const app = express();

const PORT = 3000;
const routers = require('./src/routers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1', routers);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})