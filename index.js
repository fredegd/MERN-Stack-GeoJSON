const express = require("express");
require("dotenv/config");
require("./db");
const cors = require("cors");
//
const userRouter = require("./routes/users");
const propertyRouter = require("./routes/properties");
//
const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
//ROUTES
app.use("/users", userRouter);
app.use("/properties", propertyRouter);

app.listen(PORT, () => {
  console.log(`Real Estate App is Listening on http://localhost:${PORT}`);
});
