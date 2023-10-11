const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController');

// /posts
router
    .route('/')
    .get(musicController.listAllMusics)
    .post(musicController.createAMusic);

    // /posts/:id_post
router
    .route('/:id_music')
    .delete(musicController.deleteAMusic)
    .put(musicController.updateAMusic)
    .get(musicController.getAMusic);

module.exports = router;