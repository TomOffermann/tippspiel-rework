import mongoose from "mongoose";
require("../connectDB").default();
import GameSchema from "../schemas/GameSchema";

export default mongoose.model("Games", GameSchema, "Games");
