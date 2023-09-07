const express = require('express');
const connectDB = require('./config/dbConnection');
const path = require('path')

const app = express();

const root = './routes/rootRoute';
const movieRoutes = './routes/movieRoutes'

//Set up a mongoose connection
connectDB();

//lets app recieve and parse json data
app.use(express.json());

//3rd party middleware
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/',rootRoute)
app.use('/movies', movieRoutes)