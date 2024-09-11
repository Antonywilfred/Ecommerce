const express = require("express");
const mongoose = require("mongoose");
const cookieParser=require('cookie-parser')
const cors=require('cors')

// mongoose will help to connect this server to DB

mongoose
  .connect(
    "mongodb+srv://antonywilfred11:GPLs0hfnXti1SYId2024@cluster0.hrjoy.mongodb.net/"
  )
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

  // app is created which is onvoking the express
const app = express();
const port = process.env.PORT || 5000;

// cors configuration
app.use(
    cors({
        origin: "http://127.0.0.1:5173/",
        methods: ['GET','post','delete','put'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    })
)

//cookieParsers configuration
app.use(
    cookieParser()
)
app.use(express.json())
app.listen(port, ()=>console.log('server is runnin in port 5000'))
