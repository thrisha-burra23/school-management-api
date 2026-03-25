import express from "express"
import cors from "cors"
import schoolRouter from "./routes/schoolRoutes.js";

const app=express();

app.use(express.json());
app.use(cors())

app.use("/api/",schoolRouter)


export default app