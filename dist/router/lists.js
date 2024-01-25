"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lists_1 = require("../controllers/lists");
exports.default = (router) => {
    router.get('/list/get/:userId', lists_1.getList);
    router.post('/list/create', lists_1.create);
    router.patch('/list/update', lists_1.update);
    router.delete('/list/delete/:userId', lists_1.deleteList);
};
//# sourceMappingURL=lists.js.map