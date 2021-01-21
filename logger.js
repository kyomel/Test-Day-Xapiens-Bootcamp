let fs = require("fs");
let path = require('path');


let Logger = (exports.Logger = {});

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'app.log'), { flags: 'a'})

Logger.info = function(msg) {
    let message = new Date().toISOString() + " : " + msg + "\n";
    infoStream.write(message);
  };
  
Logger.error = function(msg) {
    let message = new Date().toISOString() + " : " + msg + "\n";
    errorStream.write(message);
  };

Logger.notice = function(msg) {
    let message = new Date().toISOString() + " : " + msg + "\n";
    errorStream.write(message);
  };

Logger.warning = function(msg) {
    let message = new Date().toISOString() + " : " + msg + "\n";
    errorStream.write(message);
  };

Logger.debug = function(msg) {
    let message = new Date().toISOString() + " : " + msg + "\n";
    errorStream.write(message);
  };

Logger.alert = function(msg) {
    let message = new Date().toISOString() + " : " + msg + "\n";
    errorStream.write(message);
  };

Logger.critical = function(msg) {
    let message = new Date().toISOString() + " : " + msg + "\n";
    errorStream.write(message);
  };

Logger.emergency = function(msg) {
    let message = new Date().toISOString() + " : " + msg + "\n";
    errorStream.write(message);
  };