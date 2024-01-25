"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.createUser = exports.getUserById = exports.getUserBySessionToken = exports.getUserByEmail = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema_1 = require("./schemas/UserSchema");
exports.UserModel = mongoose_1.default.model("User", UserSchema_1.UserSchema);
const getUsers = () => exports.UserModel.find();
exports.getUsers = getUsers;
const getUserByEmail = (email) => exports.UserModel.findOne({ email });
exports.getUserByEmail = getUserByEmail;
const getUserBySessionToken = (sessionToken) => exports.UserModel.findOne({
    "authentication.sessionToken": sessionToken,
});
exports.getUserBySessionToken = getUserBySessionToken;
const getUserById = (id) => exports.UserModel.findById(id);
exports.getUserById = getUserById;
const createUser = (values) => new exports.UserModel(values).save().then((user) => user.toObject());
exports.createUser = createUser;
const deleteUserById = (id) => exports.UserModel.findOneAndDelete({ _id: id });
exports.deleteUserById = deleteUserById;
const updateUserById = (id, values) => exports.UserModel.findByIdAndUpdate(id, values);
exports.updateUserById = updateUserById;
//# sourceMappingURL=users.js.map