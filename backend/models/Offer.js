const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  remuneration: { type: Number, required: true },
  assigned: { type: Boolean, default: false },
});

module.exports = mongoose.model("Offer", OfferSchema);
