const asyncHandler = require('express-async-handler');
const Genre = require('../models/genre');

//disaplay list of genres
exports.genre_list = asyncHandler(async(req,res,next) =>{
    res.send('not implemented: genre list')
})

// display detail pages of genre
exports.genre_detail = asyncHandler(async(req,res,next) =>{
    res.send('not implemented: genre detail')
})

//handle genre create on get
exports.genre_get_create = asyncHandler(async(req,res,next) =>{
    res.send('not implemented: genre get create')
})

//handle genre create on post
exports.genre_post_create = asyncHandler(async(req,res,next) =>{
    res.send('not implemented: genre post create')
})

//handle genre update on get
exports.genre_get_update = asyncHandler(async(req,res,next) =>{
    res.send('not implemented: genre get update')
})

//handle genre update on post
exports.genre_post_update = asyncHandler(async(req,res,next) =>{
    res.send('not implemented: genre post update')
})

//handle genre delete on get
exports.genre_get_delete = asyncHandler(async(req,res,next) =>{
    res.send('not implemented: genre get delete')
})

//handle genre delete on post
exports.genre_post_delete = asyncHandler(async(req,res,next) =>{
    res.send('not implemented: genre get delete')
})
