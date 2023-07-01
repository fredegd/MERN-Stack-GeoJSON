const express = require("express")
require("dotenv/config")
require("./db")
const cors = require("cors")
//
const userRouter = require("./routes/users")
const propertyRouter = require("./routes/properties")
//
const app = express();
const PORT = process.allowedNodeEnvironmentFlags.PORT || 3000;
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    // res.send is good for sending text based response and html responses
    res.send("<h1> Hello World! </h1>");
  });

app.use("/users", userRouter);
app.use("/properties", propertyRouter);

app.listen(PORT,()=>{
    console.log(`Real Estate App is Listening on http://localhost:${PORT}`)
})