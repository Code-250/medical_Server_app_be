const express = require("express");
const { config } = require("dotenv");
const cors = require("cors");
const medicalRoute = require("./services/routes");

const app = express();

config();

app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/v1", medicalRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const port = 5000;
app.listen(port, () => console.log(`app listening on port ${port}!`));
