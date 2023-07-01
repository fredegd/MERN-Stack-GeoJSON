const express = require("express")
require("dotenv/config")
require("./db")
const cors = require("cors")
const userRouter = require("./routes/users")
const propertyRouter = require("./property/users")

