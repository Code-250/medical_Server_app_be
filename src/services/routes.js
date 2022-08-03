const express = require("express");
const MedicalController = require("../controller/index");

const medicalRoute = express.Router();
medicalRoute.get("/:id", MedicalController.FetchData);
module.exports = medicalRoute;
