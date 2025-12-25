import express from "express";
import { addEventToData } from "../controller/eventCtrl.js";
import { validatePassword, validateUser } from "../middleware/eventMiddleW.js";




const routerEvent = express.Router()

routerEvent.post("/events", validateUser,validatePassword ,addEventToData)

export default routerEvent


