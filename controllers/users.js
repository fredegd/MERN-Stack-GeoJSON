const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const {
      body: { email, name, phoneNumber },
    } = req;

    const user = await User.create({ email, name, phoneNumber });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await User.findById(id);
    // const user = await User.findOne({_id: id});
    
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
