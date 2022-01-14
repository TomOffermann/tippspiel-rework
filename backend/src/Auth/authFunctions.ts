import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function hash(string: string): Promise<string> {
  const hashedPassword: string = await new Promise((resolve, reject) => {
    bcrypt.hash(string, 10, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });

  return hashedPassword;
}

let comparePlainHash = (plain: string, hash: string): boolean =>
  bcrypt.compareSync(plain, hash);

async function generateToken(username: string, userId: string) {
  return jwt.sign(
    { name: username, userId: userId },
    process.env.JWT_SECRET ?? "",
    {
      expiresIn: 60 * 30,
    }
  );
}

export default {
  hash,
  comparePlainHash,
  generateToken,
};
