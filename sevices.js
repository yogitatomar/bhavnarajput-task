const express = require("express");
const db = require("../db/db");

const getServices = (req, res) => {
  const query =
    "select * from services left join categories on service.category_id = categories.id";
  db.query(query, (result, err) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const createServices = (req, res) => {
  const { category_id, service_name, type, price } = req.body;
  const data =
    "insert into services (category_id,service_name,type,price) values (?,?,?,?)";
  db.query(data, [category_id, service_name, type, price], (result, err) => {
    if (err) {
      console.log(err);
    } else res.send(result);
  });
};

const updateServices = (req, res) => {
  const { id, service_name, type, price } = req.body;
  db.query(
    "update services set service_name=?,type=? where id =?",
    [service_name, type, price, id],
    (result, err) => {
      if (err) {
        console.log(err);
      } else res.send(result);
    }
  );
};

const deleteServices = (req, res) => {
  const { id } = req.body;
  db.query("delete from services where id =?", [id], (result, err) => {
    if (err) {
      console.log(err);
    } else res.send(result);
  });
};

module.exports = [getServices, createServices, updateServices, deleteServices];
