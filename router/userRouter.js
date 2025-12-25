import express from "express";
import { jsonToArr, writeFile  } from "../services/files.js"; // delete after completed
import { addUsernameAndPass } from "../controller/userCtrl.js";
const router = express.Router()
const PATH_USERS_DB = "./data/users.json" // delete after completed

router.post("/register", addUsernameAndPass);


export default router;


