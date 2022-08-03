const Service = require("../services");

class MedicalController {
  static async FetchData(req, res) {
    try {
      if (req.params.id === "ADMIN") {
        const data = await Service.Admin();
        if (!data) return res.status(400).json({ message: "data Not found" });

        return res
          .status(200)
          .json({ message: "data retrived Successfully", data });
      }
      if (req.params.id === "PATIENT") {
        const data = await Service.PatientData();
        if (!data) return res.status(400).json({ message: "data Not found" });

        return res
          .status(200)
          .json({ message: "data retrived Successfully", data });
      }
      if (req.params.id === "PHARMACIST") {
        const data = await Service.PharmacyData();
        if (!data) return res.status(400).json({ message: "data Not found" });

        return res
          .status(200)
          .json({ message: "data retrived Successfully", data });
      }
      if (req.params.id === "PHYSICIAN") {
        const data = await Service.PhysicianData();
        if (!data) return res.status(400).json({ message: "data Not found" });

        return res
          .status(200)
          .json({ message: "data retrived Successfully", data });
      }
      return res.status(400).send({ message: "please login " });
    } catch (err) {
      return res.status(500).json({ message: "internal server error" });
    }
  }
}
module.exports = MedicalController;
