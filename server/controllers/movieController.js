const Movie = require('../models/movie');
const asyncHandler = require("express-async-handler");

//Display list of Movies
exports.movie_list = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Movie List');
})

//display detail page
exports.movie_detail = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Movie Details');
})

//hadle create on get
exports.movie_get_create = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Movie Get Create');
})

//handle create on post
exports.movie_post_create = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Movie create POst');
})

//handle update on get
exports.movie_get_update = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Movie get update');
})

//handle update on post
exports.movie_post_update = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Movie post update');
})

//handle delete on get
exports.movie_get_delete = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Movie get delete');
})

//handle delete on post
exports.movie_post_delete = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Movie post delete');
})