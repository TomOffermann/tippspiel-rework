import { Request, Response, Router } from "express";
import UserModel from "../../Database/models/UserModel";
import Auth from "../../Auth/authFunctions";

const login = Router();

login.get("/", async (req: Request, res: Response) => {
  const name = req?.query?.name?.toString() ?? "";
  const password = req?.query?.password?.toString() ?? "";

  const user: User = await UserModel.findOne({ name: name });
  if (user && name !== "" && password !== "") {
    if (Auth.comparePlainHash(password, user.password ?? "")) {
      res.status(200).json({
        token: await Auth.generateToken(user?.name ?? "", user?._id ?? ""),
      });
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(404);
  }
});

export default login;
