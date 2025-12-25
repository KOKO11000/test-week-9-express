import { jsonToArr } from "../services/files.js"
const PATH_USERS_DB = "./data/users.json"





export const validateExsistion = async (req, res, next) => {
    const { username, password } = req.body
    const getUsersAndPass = await jsonToArr(PATH_USERS_DB)
    const checkExsit = getUsersAndPass.find((val) => {
        return val.username === username || val.password === password
    });
    if (checkExsit.username) {
        res.json({ msg: "username allready exist " })
    } else if (checkExsit.password) {
        res.json({ msg: "password allready exist" })
    } else next()

}