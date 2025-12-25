import express from "express";
import { validatePassword, validateUser } from "../middleware/eventMiddleW.js";
import { portByTickets } from "../controller/ticketsCtrl.js";

const routereceipt = express.Router()


routereceipt.post("/tickets/buy", validateUser, validatePassword, portByTickets);


export default routereceipt
