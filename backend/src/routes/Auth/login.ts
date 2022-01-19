import { Request, Response, Router } from "express";
import UserModel from "../../Database/models/UserModel";
import Auth from "../../Auth/authFunctions";
import authenticateToken from "./authenticateToken";
import { LogAuthRequest } from "../../Log/RequestRecords";

const login = Router();

login.post("/", async (req: Request, res: Response) => {
  const name = req?.body?.name?.toString() ?? "";
  const password = req?.body?.password?.toString() ?? "";

  if (name !== "" && password !== "") {
    const user: User = await UserModel.findOne({ name: name });
    if (user) {
      if (Auth.comparePlainHash(password, user.password ?? "")) {
        LogAuthRequest(true);
        res.status(200).json({
          token: await Auth.generateToken(user?.name ?? "", user?._id ?? ""),
        });
      } else {
        LogAuthRequest(false);
        res.sendStatus(403);
      }
    } else {
      LogAuthRequest(false);
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(400);
  }
});

login.use("/", authenticateToken);

login.get("/", async (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default login;
