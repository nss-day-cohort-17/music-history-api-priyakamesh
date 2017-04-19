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
module.exports.getOneSong = ({params: {SongId}},res,next) =>{
  Song.getSong(SongId)
  .then( (song) => {
    res.status(200).json(song)
    console.log("song",song);
  })
  .catch ( (error)=>{
    next(error);
  });
}
// <stretch goal: methods for adding, deleting, editing a song>
module.exports.addSong = ({body},res,next) =>{
  Song.forge(body)
  .save()
  .then( () => res.status(200).json({"msg" : "successfully added"}))
  .catch ((error)=>{
    next (error)
  });
}

module.exports.deleteSong = ({params: {SongId}}, res,next) =>{
  Song.deleteSong(SongId)
  .then(()=> res.status(200).json({"msg": "deleted successfully"}))
  .catch((error)=> next(error))
}
