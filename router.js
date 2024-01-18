const express = require("express");
const router = express.Router();
const catagories = require("../controllers/catagories");
const services = require("../controllers/sevices");
const users = require("../controllers/users");

router.get("/", catagories.getCategories);
router.post("/create", catagories.createCategories);
router.put("/update", catagories.updateCategories);
router.delete("/delete", catagories.deleteCategories);
router.get("/", services.getServices);
router.post("/create", services.createServices);
router.put("/update", services.updateServices);
router.delete("/delete", services.deleteServices);
router.get("/login", users.userLogin);
module.exports = router;
