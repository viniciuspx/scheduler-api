import express from "express";
import authetication from "./authentication";
import users from "./users";
import lists from "./lists";

const router = express.Router();

export default (): express.Router => {
  authetication(router);
  users(router);
  lists(router);

  router.get("/", (req: express.Request, res: express.Response) => {
    return res.status(200).json("Scheduler API UP");
  });

  return router;
};
