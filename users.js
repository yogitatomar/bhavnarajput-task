const express = require("express");
const db = require("../db/db");

const userLogin = (req, res) => {
  const { email, password } = req.body;
  const query = "select * from users";
  db.query(query, (result, err) => {
    if (
      query.email === req.body.email &&
      query.password === req.body.password
    ) {
      console.log("logged i successfuly");
    } else {
      res.send(err);
    }
  });
};

module.exports = userLogin;
