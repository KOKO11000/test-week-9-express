import express from "express";
import { jsonToArr, writeFile  } from "../services/files.js"; // delete after completed
import { addUsernameAndPass } from "../controller/userCtrl.js";
import { validateExsistion } from "../middleware/usersMiddleW.js";
import { validatePassword, validateUser } from "../middleware/eventMiddleW.js";

const router = express.Router()
const PATH_USERS_DB = "./data/users.json" // delete after completed
const PATH_EVENTS_DB = "./data/events.json"


router.post("/register",validateExsistion ,addUsernameAndPass);



export default router;


