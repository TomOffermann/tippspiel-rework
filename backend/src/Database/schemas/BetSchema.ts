import { ObjectId } from "mongodb";
import mongoose from "mongoose";
require("../connectDB").default();

let Schema = mongoose.Schema;

export default new Schema({
  date: {type: Date, required: true},
  gameId: { type: Number, required: true },
  userId: { type: Number, required: true },
  scoreA: { type: Number, required: true },
  scoreB: { type: Number, required: true },
});
