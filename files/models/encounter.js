const mongoose = require("mongoose");

const encounterSchema = new mongoose.Schema({
  patientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  date: { type: Date, default: Date.now },
  time: { type: String, required: true },
  typeOfEncounter: { type: String, required: true },
});

module.exports = mongoose.model("Encounter", encounterSchema);
