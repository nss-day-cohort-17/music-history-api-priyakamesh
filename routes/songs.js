'use strict';

// <require the express Router>
const {Router} = require('express')
// <require the songCtrl to get access to its methods>
const { getAllSongs,getOneSong } = require('../controllers/songCtrl')
// <define routes for getting all songs and a single song>
const router = Router();
router.get('/songs', getAllSongs)
router.get('/songs/:SongId', getOneSong)
// <stretch: define routes for posting, deleting, editing a song>
module.exports = router
