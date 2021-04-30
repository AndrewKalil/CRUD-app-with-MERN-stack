const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let rentalSchema = new Schema(
  {
    Product: { type: String, required: true },
    "ME#": { type: String, required: true, unique: true },
    Model: { type: String, required: true },
    "Serial Number": { type: String, unique: true },
    "Last Service": { type: Number, default: 0 },
    SMU: { type: Number, default: 0 },
    "Next Service": { type: Number, default: 0 },
    MIS: { type: String, default: "" },
    Location: { type: String, default: "" },
    Conectivity: { type: String, default: "" },
    Status: { type: String, default: "" },
    COMMENTS: { type: String, default: "" },
  },
  {
    collection: "rental",
  }
);

module.exports = mongoose.model("Rental", rentalSchema);
