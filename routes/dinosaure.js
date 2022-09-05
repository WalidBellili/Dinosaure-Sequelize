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

app.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const dinosaure = await Dinosaure.findOne({
      where: {
        id,
      },
    });

    if (dinosaure) {
      res.json(dinosaure);
    } else {
      res.status(404).json("Dinosaure not found");
    }
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server error");
  }
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const dinosaure = await Dinosaure.update(req.body, {
      where: {
        id,
      },
    });

    res.json(dinosaure);
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server error");
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Dinosaure.destroy({
      where: { id },
    });

    res.status(204);
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server error");
  }
});

module.exports = app;
