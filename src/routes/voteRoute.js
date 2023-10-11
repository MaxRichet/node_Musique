const express = require('express');
const router = express.Router();

const voteController = require('../controllers/voteController');

// /posts
router
    .route('/votes/:id_vote/music')
    .get(voteController.listAllVotes)
    .post(voteController.createAVote);

// /posts/:id_post
router
    .route('/musics/:id_vote')
    .delete(voteController.deleteAVote)
    .put(voteController.updateAVote)
    .get(voteController.getAVote);

module.exports = router;