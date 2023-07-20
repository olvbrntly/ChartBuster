const Movie = require('../model/movie');
const asyncHandler = require("express-async-handler");

//Display list of Movies
exports.movie_list = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Author List');
})

//display detail page
exports.movie_detail = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Author Details');
})

//hadle create on get
exports.movie_get_create = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Author Get Create');
})

//handle create on post
exports.movie_post = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Author create POst');
})

//handle update on get
exports.movie_list = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Author get update');
})

//handle update on post
exports.movie_list = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Author post update');
})

//handle delete on get
exports.movie_list = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Author get delete');
})

//handle delete on post
exports.movie_list = asyncHandler(async(req,res,next) => {
    res.send('Not implemented:Author post delete');
})