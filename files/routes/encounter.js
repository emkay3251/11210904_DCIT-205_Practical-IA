const express = require("express");
const router = express.Router();
const Encounter = require("../models/encounter");

router.post("/", async (req, res) => {
  try {
    const newEncounter = new Encounter(req.body);
    const savedEncounter = await newEncounter.save();
    res.status(201).json(savedEncounter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const encounters = await Encounter.find().populate("patientID");
    res.json(encounters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
