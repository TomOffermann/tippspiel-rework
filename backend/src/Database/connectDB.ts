import mongoose from "mongoose";
require("dotenv").config();

const options: mongoose.ConnectOptions = {
  dbName: "Tippspiel",
  user: process.env.DB_USER ?? "",
  pass: process.env.DB_PWD ?? "",
};

mongoose.connect(`${process.env.DB_CONNECTION_STR}`, options);

var DB = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
DB.on("error", console.error.bind(console, "MongoDB connection error:"));
DB.once("open", function () {
  console.log("Connection Successful!");
});

function useDB(): mongoose.Connection {
  return DB;
}

export default useDB;
