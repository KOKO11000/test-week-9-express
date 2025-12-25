import express from "express";
import router from "./router/userRouter.js";
import router1 from "./router/eventRouter.js";

const app = express()
const port = 8080
app.use(express.json())




app.use("/user", router)
app.use("/creator",router1)

app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`);
})