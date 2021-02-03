'use strict'

const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const d = new Date();
const ye = new Intl.DateTimeFormat('en', { year: 'numeric'}).format(d);
const mo = new Intl.DateTimeFormat('en', { month: 'short'}).format(d);
const day = new Intl.DateTimeFormat('en', { day: '2-digit'}).format(d);

const result = `${ye}-${mo}-${day}`
const appLogStream = fs.createWriteStream(path.join(`tmp/log-${result}.log`), { flags: 'a'});

const log_morgan = morgan('common', { stream: appLogStream });

module.exports = log_morgan;