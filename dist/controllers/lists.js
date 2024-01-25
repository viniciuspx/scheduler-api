"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteList = exports.update = exports.create = exports.getList = void 0;
const lists_1 = require("../db/lists");
const getList = async (req, res) => {
    try {
        const { userId } = req.params;
        const list = await (0, lists_1.getListById)(userId);
        return res.status(200).json(list).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getList = getList;
const create = async (req, res) => {
    try {
        const payload = JSON.parse(req.body.payload);
        const { userId, list } = payload;
        if (!userId || !list)
            return res.sendStatus(400);
        const listExists = await (0, lists_1.getListById)(userId);
        if (listExists) {
            const updatedList = await (0, lists_1.updateList)(userId, list);
            updatedList.userId = userId;
            updatedList.list = list;
            await updatedList.save();
            return res.status(200).json(updatedList).end();
        }
        const newList = await (0, lists_1.createList)({
            userId,
            list,
        });
        return res.status(200).json(newList).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const { userId, list } = req.body;
        const updatedList = await (0, lists_1.updateList)(userId, list);
        updatedList.userId = userId;
        updatedList.list = list;
        await updatedList.save();
        return res.status(200).json(updatedList).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.update = update;
const deleteList = async (req, res) => {
    try {
        const { userId } = req.params;
        const list = await (0, lists_1.deleteUserList)(userId);
        return res.status(200).json(list).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deleteList = deleteList;
//# sourceMappingURL=lists.js.map