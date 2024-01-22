import mongoose from "mongoose";
import { ListSchema } from "./schemas/ListSchema";

export const ListModel = mongoose.model("List", ListSchema);

export const getListById = (userId: string) => ListModel.findOne({ userId: userId });
export const createList = (values: Record<string, any>) =>
  new ListModel(values).save().then((list) => list.toObject());
export const updateList = (userId: string, values: Record<string, any>) =>
  ListModel.findOneAndUpdate({ userId: userId }, { list: values });
export const deleteUserList = (userId: string) =>
  ListModel.findOneAndDelete({ userId });
