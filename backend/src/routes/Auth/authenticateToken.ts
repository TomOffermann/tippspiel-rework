import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { LogApiRequest } from "../../Log/RequestRecords";

export default function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let tokenFromHeader = req.get("authorization")?.split(" ")?.[1];
  let tokenFromUrl: string | undefined = req?.query?.token?.toString();
  let token: string | undefined;

  if (tokenFromHeader) {
    token = tokenFromHeader;
  } else {
    token = tokenFromUrl;
  }

  if (token == undefined) {
    LogApiRequest(false);

    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    if (err) {
      console.log(err);
      LogApiRequest(false);
      return res.sendStatus(403);
    }
    LogApiRequest(true);

    next();
  });
}
