"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("../middlewares");
const users_1 = require("../controllers/users");
exports.default = (router) => {
    router.get("/users", middlewares_1.isAuthenticated, users_1.getAllUsers);
    router.delete("/users/:id", middlewares_1.isAuthenticated, middlewares_1.isOwner, users_1.deleteUser);
    router.patch("/users/:id", middlewares_1.isAuthenticated, middlewares_1.isOwner, users_1.updateUser);
};
//# sourceMappingURL=users.js.map