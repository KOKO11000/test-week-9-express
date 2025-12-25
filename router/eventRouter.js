import express from "express";
import { jsonToArr, writeFile } from "../services/files.js"; // delete after completed
import { addEventToData } from "../controller/eventCtrl.js";
const router1 = express.Router()
const PATH_USERS_DB = "./data/users.json" // delete after completed
const PATH_EVENTS_DB = "./data/events.json" // delete after completed

router1.post("/events", addEventToData)

export default router1


