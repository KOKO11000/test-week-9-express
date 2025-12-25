import express from "express";
import { addEventToData } from "../controller/eventCtrl.js";
import { validateExsistion } from "../middleware/usersMiddleW.js";
import { validatePassword, validateUser } from "../middleware/eventMiddleW.js";




const routerEvent = express.Router()
const PATH_USERS_DB = "./data/users.json" // delete after completed
const PATH_EVENTS_DB = "./data/events.json" // delete after completed

routerEvent.post("/events", validateUser,validatePassword ,addEventToData)

export default routerEvent


