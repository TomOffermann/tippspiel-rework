import { Router } from "express";
import allGames from "./GameHandlers/allGames";
import singleGameById from "./GameHandlers/singleGameById";

const games = Router();

games.get("/", allGames);
games.get("/:gameId", singleGameById);

export default games;
