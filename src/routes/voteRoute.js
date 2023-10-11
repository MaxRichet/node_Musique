const express = require('express');
const router = express.Router();

const voteController = require('../controllers/voteController');

// /posts
router
    .route('/musics/:id_music/votes')
    .get(voteController.listAllVotes)
    .post(voteController.createAVote);

// /posts/:id_post
router
    .route('/votes/:id_vote')
    .delete(voteController.deleteAVote)
    .put(voteController.updateAVote)
    .get(voteController.getAVote);

module.exports = router;