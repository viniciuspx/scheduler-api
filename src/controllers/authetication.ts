import { createUser, getUserByEmail } from "../db/users";
import { Request, Response } from "express";
import { authentication, random } from "../helpers";
import { GetError } from "../error";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const errorMsg = !email
        ? GetError("missingEmail")
        : GetError("missingPassword");
      return res.status(400).json(errorMsg);
    }
    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );
    if (!user) {
      return res.status(400).json(GetError("notRegistered"));
    }

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password !== expectedHash) {
      return res.status(400).json(GetError("wrongPassword"));
    }

    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );
    await user.save();
    res.cookie("Scheduler-app", user.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username, name } = req.body;
    if (!email || !password || !username) {
      return res.status(400).json(GetError("missingInfo"));
    }
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json(GetError("alreadyRegistered"));
    }
    const salt = random();
    const user = await createUser({
      name,
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
