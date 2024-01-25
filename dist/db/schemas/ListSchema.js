"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ListSchema = new mongoose_1.default.Schema({
    userId: { type: String, required: true },
    list: [
        {
            time: { type: String },
            task: { type: String },
        },
    ],
});
//# sourceMappingURL=ListSchema.js.map