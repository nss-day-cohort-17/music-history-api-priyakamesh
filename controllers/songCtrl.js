'use strict'

const { bookshelf } = require('../db/database');
// <require a song model>
const Song = require('../models/song.js')
// < use model methods for getting all songs and one song then send the response back with the data>
module.exports.getAllSongs = (req,res,next) => {
  Song.getAll()
  .then( (songs)=>{
    res.status(200).json(songs)
  })
  .catch ((error) => {
    next(error);
  });
};
// <stretch goal: methods for adding, deleting, editing a song>
