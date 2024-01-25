"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authetication_1 = require("../controllers/authetication");
exports.default = (router) => {
    router.post('/auth/register', authetication_1.register);
    router.post('/auth/login', authetication_1.login);
};
//# sourceMappingURL=authentication.js.map