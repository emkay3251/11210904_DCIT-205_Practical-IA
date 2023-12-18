const express = require("express");
const router = express.Router();
const Vital = require("../models/vital");

router.post("/", async (req, res) => {
  try {
    const newVital = new Vital(req.body);
    const savedVital = await newVital.save();
    res.status(201).json(savedVital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const vitals = await Vital.find().populate("patientID");
    res.json(vitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
