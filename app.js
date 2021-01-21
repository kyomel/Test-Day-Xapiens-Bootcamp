let express = require("express");
let app = express();

let router = require("./router");

app.use("/", router);

app.listen(3000, function() {
  console.log("Now Listening on port 3000");
});