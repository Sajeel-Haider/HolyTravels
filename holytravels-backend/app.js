const  mongoose = require( 'mongoose');
const express = require("express");



const userrouter = require('./routes/user') ;

// Create Express app
const app = express();
const port = 8000;


app.use("/api" , userrouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));