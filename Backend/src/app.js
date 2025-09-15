// create server
const express= require('express')

const cookieParser = require('cookie-parser');



const app = express();
app.use(express.json()); // it's a middleware use for req.body in controller
app.use(cookieParser());


app.get("/", (req, res) =>{
    res.send("Hello World");
})

module.exports= app;