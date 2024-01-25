"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserList = exports.updateList = exports.createList = exports.getListById = exports.ListModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ListSchema_1 = require("./schemas/ListSchema");
exports.ListModel = mongoose_1.default.model("List", ListSchema_1.ListSchema);
const getListById = (userId) => exports.ListModel.findOne({ userId: userId });
exports.getListById = getListById;
const createList = (values) => new exports.ListModel(values).save().then((list) => list.toObject());
exports.createList = createList;
const updateList = (userId, values) => exports.ListModel.findOneAndUpdate({ userId: userId }, { list: values });
exports.updateList = updateList;
const deleteUserList = (userId) => exports.ListModel.findOneAndDelete({ userId });
exports.deleteUserList = deleteUserList;
//# sourceMappingURL=lists.js.map