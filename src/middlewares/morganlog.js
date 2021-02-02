'use strict'

const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const appLogStream = fs.createWriteStream(path.join('tmp/log-daily.log'), { flags: 'a'});

const log_morgan = morgan('common', { stream: appLogStream });


// var morgan = require("morgan");
// var fs = require("fs");
// var path = require("path");let today = new Date().toISOString().slice(0, 10);
// var accessLogStream = fs.createWriteStream(path.join("tmp/" + today + ".log"), {
//   flags: "a",
// });
// const log = morgan("combined", { stream: accessLogStream });
// module.exports = morgan('tiny');

module.exports = log_morgan;