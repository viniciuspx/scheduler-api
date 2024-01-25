"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = exports.isOwner = void 0;
const users_1 = require("../db/users");
const lodash_1 = require("lodash");
const error_1 = require("../error");
const isOwner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const currentUserId = (0, lodash_1.get)(req, "identity._id");
        if (!currentUserId) {
            return res.status(403).json((0, error_1.GetError)("notOwner"));
        }
        if (currentUserId.toString() !== id) {
            return res.status(403).json((0, error_1.GetError)("notOwner"));
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.isOwner = isOwner;
const isAuthenticated = async (req, res, next) => {
    try {
        const sessionToken = req.cookies["Scheduler-app"];
        if (!sessionToken) {
            return res.status(403).json((0, error_1.GetError)("unauthenticated"));
        }
        const existingUser = await (0, users_1.getUserBySessionToken)(sessionToken);
        if (!existingUser) {
            return res.status(403).json((0, error_1.GetError)("unauthenticated"));
        }
        (0, lodash_1.merge)(req, { identity: existingUser });
        return next();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=index.js.map