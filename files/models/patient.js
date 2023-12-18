const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    patientID: { type: String, required: true, unique: true },
    surname: { type: String, required: true },
    otherNames: { type: String, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    residentialAddress: { type: String, required: true },
    emergencyName: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    relationshipWithPatient: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
