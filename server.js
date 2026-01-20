const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const tenantRoutes = require("./routes/tenants");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/admin", adminRoutes);
app.use("/api/tenants", tenantRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
