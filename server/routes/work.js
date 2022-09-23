const express = require('express')
const { getSong, createSong, deleteSong } = require('../controllers/workController')
const router = express.Router()
router.get('/',getSong)
router.post('/',createSong)
router.delete('/:id',deleteSong)
module.exports = router