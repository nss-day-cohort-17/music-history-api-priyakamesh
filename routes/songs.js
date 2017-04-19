'use strict';

// <require the express Router>
const {Router} = require('express')
// <require the songCtrl to get access to its methods>
const { getAllSongs } = require('../controllers/songCtrl')
// <define routes for getting all songs and a single song>
const router = Router();
router.get('/api/v1/songs', getAllSongs)
// <stretch: define routes for posting, deleting, editing a song>
module.exports = router
