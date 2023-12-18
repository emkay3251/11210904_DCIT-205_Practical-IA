const mongoose = require("mongoose");

const vitalSchema = new mongoose.Schema({
  patientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  bloodPressure: { type: String, required: true },
  temperature: { type: Number, required: true },
  pulse: { type: Number, required: true },
  spO2: { type: Number, required: true },
  recordedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vital", vitalSchema);
