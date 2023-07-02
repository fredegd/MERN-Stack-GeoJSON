const express = require("express");

const {
  createProperty,
  getProperties,
  getProperty,
  getPropertiesNearBy,
  updateProperty,
  deleteProperty,
} = require("../controllers/properties");

const propertyRouter = express.Router();

//CRUD's
propertyRouter.post("/", createProperty); //CREATE

propertyRouter.get("/near-by", getPropertiesNearBy); //READ
propertyRouter.get("/:id", getProperty); //READ
propertyRouter.get("/", getProperties); //READ

propertyRouter.put("/:id", updateProperty); //UPDATE

propertyRouter.delete("/:id", deleteProperty); //DELETE

module.exports = propertyRouter;
