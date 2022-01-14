import mongoose from "mongoose";
require("../connectDB").default();

let Schema = mongoose.Schema;

export default new Schema({
  date: { type: Date, required: true },
  gameId: { type: Number, required: true },
  teamA: {
    score: { type: Number, required: true },
    name: { type: String, required: true },
    flagUrl: { type: String, required: true },
  },
  teamB: {
    score: { type: Number, required: true },
    name: { type: String, required: true },
    flagUrl: { type: String, required: true },
  },
});
