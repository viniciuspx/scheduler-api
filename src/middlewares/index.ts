import { NextFunction, Request, Response } from "express";
import { getUserBySessionToken } from "../db/users";
import { get, merge } from "lodash";
import { GetError } from "../error";

export const isOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id") as string;

    if (!currentUserId) {
      return res.status(403).json(GetError("notOwner"));
    }
    if (currentUserId.toString() !== id) {
      return res.status(403).json(GetError("notOwner"));
    }
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessionToken = req.cookies["Scheduler-app"];
    if (!sessionToken) {
      return res.status(403).json(GetError("unauthenticated"));
    }
    const existingUser = await getUserBySessionToken(sessionToken);
    if (!existingUser) {
      return res.status(403).json(GetError("unauthenticated"));
    }
    merge(req, { identity: existingUser });
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
