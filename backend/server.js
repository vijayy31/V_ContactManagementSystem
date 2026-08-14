import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB  from './db/connectdb.js'
import contactRoute from './routes/contact.route.js'

dotenv.config();
const app = express();
const PORT=process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoute)

app.listen(PORT,()=>{
    console.log("Server is running on",PORT);
    connectDB(); 
});

