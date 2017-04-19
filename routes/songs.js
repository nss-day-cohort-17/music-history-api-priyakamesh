'use strict';

// <require the express Router>
const {Router} = require('express')
// <require the songCtrl to get access to its methods>
const { getAllSongs,getOneSong, addSong, deleteSong, editSong } = require('../controllers/songCtrl')
// <define routes for getting all songs and a single song>
const router = Router();
router.get('/songs', getAllSongs)
router.get('/songs/:SongId', getOneSong)

// <stretch: define routes for posting, deleting, editing a song>
router.post('/songs/new', addSong)
router.delete('/songs/:SongId', deleteSong)
router.patch('/songs/:SongId', editSong)
module.exports = router
