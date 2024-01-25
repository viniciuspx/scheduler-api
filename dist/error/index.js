"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetError = void 0;
const ErrorMsgs = __importStar(require("./errors.json"));
const GetError = (error) => {
    var errorMsg = "";
    switch (error) {
        case "notOwner":
            errorMsg = ErrorMsgs.notOwner;
            break;
        case "unauthenticated":
            errorMsg = ErrorMsgs.unauthenticated;
            break;
        case "missingEmail":
            errorMsg = ErrorMsgs.missingEmail;
            break;
        case "missingPassword":
            errorMsg = ErrorMsgs.missingPassword;
            break;
        case "notRegistered":
            errorMsg = ErrorMsgs.notRegistered;
            break;
        case "wrongPassword":
            errorMsg = ErrorMsgs.wrongPassword;
            break;
        case "missingInfo":
            errorMsg = ErrorMsgs.missingInfo;
            break;
        case "alreadyRegistered":
            errorMsg = ErrorMsgs.alreadyRegistered;
            break;
        default:
            errorMsg = "Forbbiden/Unauthorized";
            break;
    }
    return { message: errorMsg };
};
exports.GetError = GetError;
//# sourceMappingURL=index.js.map