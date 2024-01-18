const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  database: "demodb",
  user: "root",
  password: "root",
});

const con = db.connect(() => {
  console.log("db connected successfully");
});

module.exports = con;
