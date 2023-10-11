const express = require('express');
const router = express.Router();

const voteController = require('../controllers/voteController');

// /posts
// router
//     .route('/votes/:id_vote/music')
//     .get(voteController.listAllVote)
//     .post(voteController.createAVotes);

// // /posts/:id_post
// router
//     .route('/comments/:id_com')
//     .delete(voteController.deleteAVotes)
//     .put(voteController.updateAVotes)
//     .get(voteController.getAVotes);

module.exports = router;