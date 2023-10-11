const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController');

// /posts
router
    .route('/')
    .get(musicController.listAllmusics)
    .post(musicController.createAmusic);

    // /posts/:id_post
router
    .route('/:id_post')
    .delete(musicController.deleteAmusic)
    .put(musicController.modifiedAmusic)
    .get(musicController.getAmusic);

module.exports = router;