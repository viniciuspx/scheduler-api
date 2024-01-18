import express from "express";
import authetication from "./authentication";
import users from "./users";

const router = express.Router();

export default (): express.Router => {
    authetication(router);
    users(router);
    
    return router; 
}