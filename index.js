require("dotenv").config();
require("./models/index");
const cors = require("cors");
const express = require("express");
const app = express();
const dinosaureRoute = require("./routes/dinosaure");
port = process.env.port;

app.use(express.json());
app.use(cors());
app.use("/dinosaure", dinosaureRoute);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
