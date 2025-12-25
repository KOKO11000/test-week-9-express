import express from "express";
import router from "./router/userRouter.js";

const app = express()
const port = 8080
app.use(express.json())




app.use("/user",router)


app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`);
})