const express = require("express");
const mongoose = require("mongoose");
const app = express();

const mongoConnectionString =
  "mongodb+srv://mlkpetsey:Password%4014@cluster0.zwdiqqh.mongodb.net/";

mongoose
  .connect(mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.use(express.json());

const patientRouter = require("./routes/patient");
const encounterRouter = require("./routes/encounter");
const vitalRouter = require("./routes/vital");

app.use("/api/patients", patientRouter);
app.use("/api/encounters", encounterRouter);
app.use("/api/vitals", vitalRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
    endpoints: {
      patients: "/api/patients",
      encounters: "/api/encounters",
      vitals: "/api/vitals",
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
