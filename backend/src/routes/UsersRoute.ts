import { Router } from "express";
import allUsers from "./UserHandlers/allUsers";
import singleUserByName from "./UserHandlers/singleUser";

const users = Router();

users.get("/", allUsers);
users.get("/:userId", singleUserByName);

export default users;
