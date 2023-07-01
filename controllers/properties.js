const Property = require("../models/property");

const createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      bedrooms,
      area,
      location,
      image,
      images,
      owner,
      availability
    } = req.body;

    const property = await Property.create({
      title,
      description,
      price,
      bedrooms,
      area,
      location,
      image,
      images,
      owner,
      availability
    });
    
    res.status(201).json(property);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find({});
    res.json(properties);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


const getProperty = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const property = await Property.findById(id).populate("owner", "name email phoneNumber");
    
    res.json(property);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProperty = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    
    const property = await Property.findByIdAndUpdate(id, body, { new: true });
    res.json(property);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteProperty = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const property = await Property.findByIdAndDelete(id);
    res.json(property);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = { createProperty, getProperties, getProperty, updateProperty,deleteProperty };
