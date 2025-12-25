import { jsonToArr } from "../fsFiles/fsFunc.js"
const PATH_USERS_DB = "./data/users.json" // delete after completed
const PATH_EVENTS_DB = "./data/events.json" // delete after completed



export const validateRegister = async (req,res,next)=>{
    const checkRegister = await jsonToArr(PATH_USERS_DB)
    //   const {name,password} = req.headers
    if (checkRegister) {
        next()
    } else {
     res.sendStatus(403)   
    }
}