import mongoose from "mongoose";
require("../connectDB").default();
import BetSchema from "../schemas/BetSchema";

export default mongoose.model("Bets", BetSchema, "Bets");
