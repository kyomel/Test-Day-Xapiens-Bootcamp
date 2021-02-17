'use strict'

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const router = require('./router');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})