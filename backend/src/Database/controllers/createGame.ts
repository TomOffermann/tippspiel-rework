import GameModel from "../models/GameModel";

export default async function createGame(game: Game) {
  let newGame = new GameModel({
    date: game.date,
    gameId: game.gameId,
    teamA: game.teamA,
    teamB: game.teamB,
  });
  newGame.save((err: any) => {
    if (err) throw err;
  });
}
