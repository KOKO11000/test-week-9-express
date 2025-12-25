import fs from "fs/promises"

export async function jsonToArr(path) {
    const readFile = await fs.readFile(path, "utf-8")
    const getFile = JSON.parse(readFile)
    return getFile
}


export async function writeFile(path, data) {
try {
        const convertedTxt = JSON.stringify(data)
         await fs.writeFile(path, convertedTxt)
} catch (error) {
    console.log(error);
}}
