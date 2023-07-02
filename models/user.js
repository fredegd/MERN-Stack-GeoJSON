const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, unique: true, required: true },
});
const User = mongoose.model("user",userSchema)
// User.collection.createIndex({ location: '2dsphere' })

module.exports = User;