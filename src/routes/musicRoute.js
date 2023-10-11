const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController');

// /posts
router
    .route('/')
    .get(musicController.listAllmusic)
    .post(musicController.createAmusics);

    // /posts/:id_post
router
    .route('/:id_post')
    .delete(musicController.deleteAmusics)
    .put(musicController.modifiedAmusics)
    .get(musicController.getAmusics);

module.exports = router;