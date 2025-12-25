import { jsonToArr, writeFile } from "../services/files.js"; // delete after completed
const PATH_USERS_DB = "./data/users.json"

//  POST
export const addUsernameAndPass = async (req, res) => {
    try {
        const { username, password } = req.body;
        const getAllUsers = await jsonToArr(PATH_USERS_DB);
        const newuser = {
            username,
            password
        };
        getAllUsers.push(newuser);
        await writeFile(PATH_USERS_DB, getAllUsers);
        return res.json([newuser, { msg: "User registered successfully" }]);
    } catch (error) {
        console.error(error);
    }
};


