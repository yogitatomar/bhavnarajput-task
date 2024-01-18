const express = require("express");
const app = express();
const db = require("./db/db");

const route = require("./router/router");
app.use("/api/", route);
app.listen(3000, () => {
  console.log("app is listening on port");
});
