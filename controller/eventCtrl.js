import { jsonToArr, writeFile } from "../services/files.js";
const PATH_USERS_DB = "./data/users.json"
const PATH_EVENTS_DB = "./data/events.json"

// POST
export const addEventToData = async (req, res) => {
    try {
        const { eventName, ticketsForSale, username, password } = req.body;
        const getAllEvents = await jsonToArr(PATH_EVENTS_DB);
        const newEvent = {
            eventName,
            ticketsForSale,
            username,
            password
        };
        getAllEvents.push(newEvent);
        await writeFile(PATH_EVENTS_DB, getAllEvents);
        return res.json({ msg: "Event created successfully" });
    } catch (error) {
        console.error(error);
    }
}