import users from "./routes/UsersRoute";
import bets from "./routes/BetsRoute";
import games from "./routes/GamesRoute";

import Auth from "./Auth/authFunctions";
import authenticateToken from "./routes/Auth/authenticateToken";
import { green } from "colors";
import login from "./routes/Auth/login";
import UserModel from "./Database/models/UserModel";
import createMultipleUsers from "./Database/controllers/createMultipleUsers";

import express, { Request, Response, NextFunction } from "express";
require("dotenv").config();
import cors from "cors";

let testUserNames = ["Paul", "Peter", "Augustine", "Jonas", "Justus"];
let testUsers: User[] = testUserNames.map((e, i) => {
  return {
    userId: i,
    name: e,
    email: e.toLowerCase() + "@gmail.com",
    password: "1234",
  };
});

//createMultipleUsers(testUsers)

let testAsync = async (): Promise<void> => {
  let testUser = "Tom";
  let user: User | undefined = await UserModel.findOne({ name: testUser });
  const userId = user?._id?.toString();
  let token = await Auth.generateToken(testUser, userId ?? "");
  console.log(green("['" + testUser + "']") + " -> " + token);
};

testAsync();

const app = require("express")();

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/login", login);

app.use("/api?:token", authenticateToken);

app.use("/api/users", users);
app.use("/api/games", games);
app.use("/api/bets", bets);

app.listen(process.env.PORT ?? 4000, () => {
  console.log(`App listening on port ${process.env.PORT ?? 4000}`);
});
