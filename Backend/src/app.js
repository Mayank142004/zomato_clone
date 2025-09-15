// create server
const express= require('express')
const authRoutes = require('./routes/auth.routes');
// const cors = require('cors');
const cookieParser = require('cookie-parser');



const app = express();
app.use(express.json()); // it's a middleware use for req.body in controller
app.use(cookieParser());
// app.use(cors({ origin: true, credentials: true }));
 

app.get("/", (req, res) =>{
    res.send("Hello World");
})

app.use('/api/auth', authRoutes);


module.exports= app;