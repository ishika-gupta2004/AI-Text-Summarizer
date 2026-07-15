require('dotenv').config();
const express = require ('express'); //this help us to create the API
const cors = require ('cors');
const aiRoutes = require("./routers/aiRoutes");

const app = express(); //this create express application
app.use(cors());
app.use(express.json());

app.get("/",(req,resp)=>{
    resp.send("Hey")
})
console.log(process.env.OPENROUTER_API_KEY);

app.use("/api/ai", aiRoutes);

app.listen(5000,()=>{
    console.log("Sevrer running")
})