import app from "./src/app.js"
import { connectToDb } from "./src/config/db.js"
const PORT=process.env.PORT || 5000

connectToDb();

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
    console.log(`Server is running successfully!! at port${PORT}`)
})