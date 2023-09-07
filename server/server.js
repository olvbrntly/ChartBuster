const express = require('express');
const connectDB = require('./config/dbConnection')

const app = express();

//Set up a mongoose connection
connectDB();

