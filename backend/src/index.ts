import users from "./routes/UsersRoute";
import bets from "./routes/BetsRoute";
import games from "./routes/GamesRoute";

import Auth from "./Auth/authFunctions";
import verifyToken from "./routes/Auth/verifyToken";
import { green } from "colors";
import login from "./routes/Auth/login";
import UserModel from "./Database/models/UserModel";
import createMultipleUsers from "./Database/controllers/createMultipleUsers";

let testUserNames = ["Tom", "Linn", "Ralf", "Silke", "Peter"];
let testUsers: User[] = testUserNames.map((e) => {
  return {
    userId: 0,
    name: e,
    email: e.toLowerCase() + "@offermann.name",
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

app.use("/login", login);

app.use("/api?:token", verifyToken);

app.use("/api/users", users);
app.use("/api/games", games);
app.use("/api/bets", bets);

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
