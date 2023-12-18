# 11210904 Maxwell Kpetsey Lebene

# EMR System API Endpoints

## Patient Registration

- _POST_ /patients/register
  - Register a new patient with their personal and emergency contact information.
  - Required JSON payload: patientID, surname, otherNames, gender, phoneNumber, residentialAddress, emergencyName, emergencyContact, relationshipWithPatient.

## Start Encounter

- _POST_ /encounters/start
  - Start a new encounter (visitation) record for an existing patient.
  - Required JSON payload: patientID, date, time, typeOfEncounter.

## Submit Patient Vitals

- _POST_ /vitals/submit
  - Submit a patient's vitals recorded by a nurse.
  - Required JSON payload: patientID, bloodPressure, temperature, pulse, spO2.

## List of Patients

- _GET_ /patients
  - Retrieve a list of all registered patients for a doctor to view.
  - Optional query parameters may be used for pagination.

## Patient Details

- _GET_ /patients/{patientID}
  - Retrieve detailed information about a specific patient using their patient ID.
