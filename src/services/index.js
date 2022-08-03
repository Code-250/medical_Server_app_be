const path = require("path");
const xlsx = require("xlsx");

class Service {
  static async PatientData() {
    try {
      const filePath = path.resolve(__dirname, "Medical Data.xlsx");
      const workbook = xlsx.readFile(filePath);
      const sheetNames = workbook.SheetNames;

      // Get the data of "Sheet1"
      const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
      return data;
    } catch (err) {
      return err;
    }
  }
  static async PharmacyData() {
    try {
      const filePath = path.resolve(__dirname, "Medical Data.xlsx");
      const workbook = xlsx.readFile(filePath);
      const sheetNames = workbook.SheetNames;

      // Get the data of "Sheet1"
      const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[1]]);
      return data;
    } catch (err) {
      return err;
    }
  }
  static async PhysicianData() {
    try {
      const filePath = path.resolve(__dirname, "Medical Data.xlsx");
      const workbook = xlsx.readFile(filePath);
      const sheetNames = workbook.SheetNames;

      // Get the data of "Sheet1"
      const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[2]]);

      return data;
    } catch (err) {
      return err;
    }
  }
  static async Admin() {
    try {
      const filePath = path.resolve(__dirname, "Medical Data.xlsx");
      const workbook = xlsx.readFile(filePath);
      const sheetNames = workbook.SheetNames;

      // Get the data of "Sheet1"
      const Patient = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
      const PharmacyData = xlsx.utils.sheet_to_json(
        workbook.Sheets[sheetNames[1]]
      );
      const PhysicianData = xlsx.utils.sheet_to_json(
        workbook.Sheets[sheetNames[2]]
      );
      const data = Patient.concat(PharmacyData, PhysicianData);
      return data;
    } catch (err) {
      return err;
    }
  }
}
module.exports = Service;
