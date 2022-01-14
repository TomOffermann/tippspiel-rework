import mongoose from "mongoose";
require("../connectDB").default();
import UserSchema from "../schemas/UserSchema";

export default mongoose.model("Users", UserSchema, "Users");
