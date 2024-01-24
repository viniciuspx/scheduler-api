import express from "express";
import { getList, create, update, deleteList } from "../controllers/lists";

export default(router: express.Router) => {
    router.get('/list/get/:userId', getList);
    router.post('/list/create', create);
    router.patch('/list/update', update);
    router.delete('/list/delete', deleteList)
}