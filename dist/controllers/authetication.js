"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const users_1 = require("../db/users");
const helpers_1 = require("../helpers");
const error_1 = require("../error");
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            const errorMsg = !email
                ? (0, error_1.GetError)("missingEmail")
                : (0, error_1.GetError)("missingPassword");
            return res.status(400).json(errorMsg);
        }
        const user = await (0, users_1.getUserByEmail)(email).select("+authentication.salt +authentication.password");
        if (!user) {
            return res.status(400).json((0, error_1.GetError)("notRegistered"));
        }
        const expectedHash = (0, helpers_1.authentication)(user.authentication.salt, password);
        if (user.authentication.password !== expectedHash) {
            return res.status(400).json((0, error_1.GetError)("wrongPassword"));
        }
        const salt = (0, helpers_1.random)();
        user.authentication.sessionToken = (0, helpers_1.authentication)(salt, user._id.toString());
        await user.save();
        res.cookie("Scheduler-app", user.authentication.sessionToken, {
            domain: "localhost",
            path: "/",
        });
        return res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};
exports.login = login;
const register = async (req, res) => {
    try {
        const { email, password, username, name } = req.body;
        if (!email || !password || !username) {
            return res.status(400).json((0, error_1.GetError)("missingInfo"));
        }
        const existingUser = await (0, users_1.getUserByEmail)(email);
        if (existingUser) {
            return res.status(400).json((0, error_1.GetError)("alreadyRegistered"));
        }
        const salt = (0, helpers_1.random)();
        const user = await (0, users_1.createUser)({
            name,
            email,
            username,
            authentication: {
                salt,
                password: (0, helpers_1.authentication)(salt, password),
            },
        });
        return res.status(200).json(user).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.register = register;
//# sourceMappingURL=authetication.js.map