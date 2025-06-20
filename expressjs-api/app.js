const express = require("express");
const cors = require("cors");
const productRoutes = require("../expressjs-api/routes/productRoutes");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use("/", productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
