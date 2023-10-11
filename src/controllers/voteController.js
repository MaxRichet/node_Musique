const Vote = require('../models/voteModels');

exports.listAllVotes = async (req, res) => {
    try {
        const vote = await Vote.find({});
        res.status(200);
        res.json(vote);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur'});
    }
}

exports.createAVote = async (req, res) => {
    const newVote = new Vote(req.body);

    try {
        const vote = await newVote.save();
        res.status(201);
        res.json(vote);
    } catch (error) {
        res.status(500);
        res.json({message: 'Erreur serveur'});
    }
}

exports.updateAVote = async (req, res) => {
    try {
        const vote = await Vote.findByIdAndUpdate(req.params.id_vote, req.body, {new: true});
        res.status(200);
        res.json(vote);
    } catch (error) {
        res.status(500);
        res.json({message: 'Erreur serveur'});
    }
}

exports.deleteAVote = async (req, res) => {
    try {
        await Vote.findByIdAndDelete(req.params.id_vote);
        res.status(200);
        res.json({message: 'Article supprimé'});
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur serveur'});
    }
}

exports.getAMusic = async (req, res) => {
    try {
        const vote = await Vote.findById(req.params.id_vote);
        if (vote) {
            res.status(200).json(vote);
        } else {
            res.status(204).json({message: 'Music not found.'})
        }
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur serveur'});
    }
}