import { Router } from "express";
import allBets from "./BetHandlers/allBets";
import singleBet from "./BetHandlers/singleBet";

const bets = Router();

bets.get("/", allBets);
bets.get("/:gameId/:userId", singleBet);

export default bets;
