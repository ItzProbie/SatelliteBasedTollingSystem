const express = require("express");
const app = express();
const cors = require("cors");


const database = require("./config/database");
const routes = require("./routes/route");

database.connect();
app.use(express.json());
app.use(cors());

app.use("/api/v1/map" , routes);

app.get("/" , (req,res) => {
    res.send(`<h1>SERVER STARTED SUCESSFULLY</h1>`);
})

app.listen(3000 , () => {
    console.log("SERVER STARTED AT PORT 3000");
})
