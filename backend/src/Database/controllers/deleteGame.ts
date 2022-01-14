import GameModel from "../models/GameModel";

export default async function deleteGame(game: Game) {
  await GameModel.deleteOne({
    gameId: game.gameId,
  });
}