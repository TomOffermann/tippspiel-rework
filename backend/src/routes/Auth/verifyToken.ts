import { Request, Response, NextFunction } from "express";
import { green, magenta, red } from "colors";
import jwt from "jsonwebtoken";

let processApiCalls = 0;

export default function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let tokenFromHeader = req.get("authorization")?.split(" ")?.[1];
  console.log(tokenFromHeader);
  let tokenFromUrl: string | undefined = req?.query?.token?.toString();

  let token: string | undefined;

  if (tokenFromHeader) {
    token = tokenFromHeader;
  } else {
    token = tokenFromUrl;
  }

  if (token == undefined) {
    processApiCalls++;
    console.log(
      red("[Declined] ") +
        "-> " +
        magenta("Api-Auth-Call: ") +
        processApiCalls.toString()
    );
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    if (err) {
      console.log(err);
      processApiCalls++;
      console.log(
        red("[Declined] ") +
          "-> " +
          magenta("Api-Auth-Call: ") +
          processApiCalls.toString()
      );
      return res.sendStatus(403);
    }
    processApiCalls++;
    console.log(
      green("[Accepted] ") +
        "-> " +
        magenta("Api-Auth-Call: ") +
        processApiCalls.toString()
    );
    next();
  });
}
