import mongoose from "mongoose";
require("../connectDB").default();

let Schema = mongoose.Schema;

export default new Schema({
  userId: { type: Number, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});
