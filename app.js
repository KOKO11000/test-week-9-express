import express from "express";
import router from "./router/userRouter.js";
import routerEvent from "./router/eventRouter.js";

const app = express()
const port = 5000
app.use(express.json())




app.use("/user", router)
app.use("/creator",routerEvent)

app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`);
})