import * as ErrorMsgs from "./errors.json";

export const GetError = (error: string) => {
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
