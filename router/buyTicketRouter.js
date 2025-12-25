import express from "express";
import { validatePassword, validateUser } from "../middleware/eventMiddleW.js";
import { jsonToArr, writeFile } from "../services/files.js";

const routereceipt = express.Router()
const PATH_USERS_DB = "./data/users.json" // delete after completed
const PATH_EVENTS_DB = "./data/events.json" // delete after completed
const PATH_RECEIPTS_DB = "./data/receipts.json" // delete after completed



routereceipt.post("/tickets/buy", validateUser, validatePassword, async (req, res) => {
    try {
        const { eventName, quantity } = req.body;
        const getAllEvents = await jsonToArr(PATH_EVENTS_DB);
        const getAllReceipts = await jsonToArr(PATH_RECEIPTS_DB);

        const getEventObj = getAllEvents.find(event => event.eventName === eventName)
        const buyTickets = {
            eventName: getEventObj.eventName,
            quantity: getEventObj.ticketsForSale - quantity
        };
        getAllReceipts.push(buyTickets);
        await writeFile(PATH_RECEIPTS_DB, getAllReceipts);
        await writeFile(PATH_EVENTS_DB,getAllEvents)
        return res.json([ { msg: "Tickets purchased successfully" }, buyTickets]);
    } catch (error) {
        console.error(error);
    }
});



export default routereceipt
