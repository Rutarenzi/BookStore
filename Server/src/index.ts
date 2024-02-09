import express,{Request, Response} from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import AllRoutes from "../src/routes"

dotenv.config();

const PORT = process.env.PORT 
const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(helmet())


try{
 app.use("/api/v1/",AllRoutes);
 app.listen(PORT,()=>{
    console.log(`Server connected on http://localhost:${PORT} `)
 })
}catch(error){
    console.log(error)
}

