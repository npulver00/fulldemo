const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios')
dotenv.config()
const authController = require("./controllers/authController")

const app = express();
app.use(bodyParser.json())
app.use(session({
secret: process.env.SESSION_SECRET,
saveUninitialized: false,
resave: false,
cookie: {
    maxAge: 1000 * 60 * 60 *24 * 7 * 2 
}
}));



massive(process.env.CONNECTION_STRING).then(database=>{
    app.set("db", database);
}).catch(error=>{
    console.log("Error in Massive", error)
});

app.get('/auth/callback', authController.login)




const PORT = 4008;

app.listen(PORT, ()=>{
    console.log(`The Server is listening on port ${PORT}`)
})
