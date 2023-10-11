const express = require('express');
const router = express.Router();

const cumulController = require('../controllers/cumulController');

// /posts
router
    .route('/result')
    .get(cumulController.cumulAllVotes);

module.exports = router;