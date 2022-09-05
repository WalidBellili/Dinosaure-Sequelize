const express = require("express");
const app = express();
const { Dinosaure } = require("../models/index");

app.post("/", async (req, res) => {
  try {
    const dinosaure = await Dinosaure.create(req.body);
    res.json(dinosaure);
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server error");
  }
});

app.get("/", async (req, res) => {
  try {
    const dinosaure = await Dinosaure.findAll({});

    res.json(dinosaure);
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server error");
  }
});

module.exports = app;
