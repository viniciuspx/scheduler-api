import {
  getListById,
  createList,
  updateList,
  deleteUserList,
} from "../db/lists";
import { Response, Request } from "express";

export const getList = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const list = await getListById(userId);
    return res.status(200).json(list).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const payload = JSON.parse(req.body.payload);
    const { userId, list } = payload;
    if (!userId || !list) return res.sendStatus(400);
    const listExists = await getListById(userId);
    if (listExists) {
      const updatedList = await updateList(userId, list);
      updatedList.userId = userId;
      updatedList.list = list;
      await updatedList.save();
      return res.status(200).json(updatedList).end();
    }
    const newList = await createList({
      userId,
      list,
    });
    return res.status(200).json(newList).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { userId, list } = req.body;
    const updatedList = await updateList(userId, list);
    updatedList.userId = userId;
    updatedList.list = list;
    await updatedList.save();
    return res.status(200).json(updatedList).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteList = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const list = await deleteUserList(userId);
    return res.status(200).json(list).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
