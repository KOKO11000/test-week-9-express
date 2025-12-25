//  PORT
export const portByTickets = async (req, res) => {
    try {
        const { eventName, quantity } = req.body;
        const getAllEvents = await jsonToArr(PATH_EVENTS_DB);
        const getAllReceipts = await jsonToArr(PATH_RECEIPTS_DB);

        const getEventObj = getAllEvents.find(event => event.eventName === eventName);
        const buyTickets = {
            eventName: getEventObj.eventName,
            quantity: getEventObj.ticketsForSale - quantity
        };
        getAllReceipts.push(buyTickets);
        await writeFile(PATH_RECEIPTS_DB, getAllReceipts);
        await writeFile(PATH_EVENTS_DB, getAllEvents);
        return res.json([{ msg: "Tickets purchased successfully" }, buyTickets]);
    } catch (error) {
        console.error(error);
    }
};