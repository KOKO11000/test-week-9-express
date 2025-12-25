import express from "express";
import router from "./router/userRouter.js";
import routerEvent from "./router/eventRouter.js";
import routereceipt from "./router/buyTicketRouter.js";

const app = express()
const port = 5000
app.use(express.json())



app.get("/health",(req,res)=>{
    return res.json({"ok": true})
})
app.use("/user", router)
app.use("/users", routereceipt)
app.use("/creator",routerEvent)

app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`);
})