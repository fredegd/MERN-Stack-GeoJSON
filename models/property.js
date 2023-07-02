const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const propertySchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true, min: 1 },
  area: { type: Number, required: true },
  location: { type: pointSchema, index: "2dsphere", required: true },
  image: { type: String, required: true },
  images: { type: [String] },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  availability: {
    type: String,
    enum: ["vacant", "rented", "sold"],
    default: "vacant",
  },
  createdAt: { type: Boolean, default: true },
});
propertySchema.index({ location: "2dsphere" });

const Property = mongoose.model("property", propertySchema);
// Property.collection.createIndex({ location: "2dsphere" });
module.exports = Property;
