const express = require('express');
const connectDB = require('./config/dbConnection')

const app = express();

//Set up a mongoose connection
connectDB();

//lets app recieve and parse json data
app.use(express.json());

//3rd party middleware
app.use(cookieParser());