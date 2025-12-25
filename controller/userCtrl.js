import { jsonToArr, writeFile  } from "../services/files.js"; // delete after completed
const PATH_USERS_DB = "./data/users.json"

//  POST
export function addUsernameAndPass() {
    return async (req, res) => {
        try {
            const { username, password } = req.body;
            const getAllUsers = await jsonToArr(PATH_USERS_DB);
            const newuser = {
                username,
                password
            };
            getAllUsers.push(newuser);
            await writeFile(PATH_USERS_DB, getAllUsers);
            res.json({ msg: "new user created successfully" }, newuser);
        } catch (error) {
            console.error(error);
        }

    };
}

