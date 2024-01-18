const express = require("express");
const db = require("../db/db");

const getCategories = (req, res) => {
  const query = "select * from catagories";
  db.query(query, (result, err) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const createCategories = (req, res) => {
  const { name, email } = req.body;
  const data = "insert into catagories (name,email,nobile) values (?,?,?)";
  db.query(data, [name, email], (result, err) => {
    if (err) {
      console.log(err);
    } else res.send(result);
  });
};

const updateCategories = (req, res) => {
  const { id, name, email } = req.body;
  db.query(
    "update categories set name=?,email=? where id =?",
    [name, email, id],
    (result, err) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
};

const deleteCategories = (req, res) => {
  const { id } = req.body;
  db.query("delete from categories where id =?", [id], (result, err) => {
    if (err) {
      console.log(err);
    } else res.send(result);
  });
};

module.exports = [
  getCategories,
  createCategories,
  updateCategories,
  deleteCategories,
];
