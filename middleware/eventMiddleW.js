import { jsonToArr } from "../services/files.js"
const PATH_USERS_DB = "./data/users.json"


export const validatePassword = async (req, res, next) => {
    const { password } = req.body
    const getUsersAndPass = await jsonToArr(PATH_USERS_DB)
    const checkExsit = getUsersAndPass.find((val) => {
        return val.password === password
    });
    if (checkExsit) {
        next()
    } else res.json({ msg: "Worng password !!! " })

}
export const validateUser = async (req, res, next) => {
    const { username} = req.body
    const getUsers = await jsonToArr(PATH_USERS_DB)
    const checkExsitUser = getUsers.find((val) => {
        return val.username === username 
    });
    if (checkExsitUser) {
       next()
    } else res.json({msg:"user not exist"})

}