const Vote = require('../models/voteModels');

exports.listAllVotes = async (req, res) => {
    try {
        const vote = await Vote.find({music_id: req.params.id_music});
        res.status(200).json(vote);
    } catch (error) {
        res.status(500).json({message: 'Erreur serveur'});
    }
}

exports.createAVote = async (req, res) => {
    const regex = /^[1-5]$/;
    try {
        await Vote.findById(req.params.id_music);
        const newVote = new Vote({...req.body, music_id: req.params.id_music});
        try {
            const vote = await newVote.save();
            res.status(201).json(vote);
        } catch (error) {
            res.status(500).json({message: 'Erreur serveur (db)'});
        }
    } catch (error) {
        res.status(500).json({message: 'Erreur serveur (post inexistant)'});
    }    
}

exports.updateAVote = async (req, res) => {
    try {
        const vote = await Vote.findByIdAndUpdate(req.params.id_vote, req.body, {new: true});
        res.status(200).json(vote);
    } catch (error) {
        res.status(500).json({message: 'Erreur serveur'});
    }
}

exports.deleteAVote = async (req, res) => {
    try {
        await Vote.findByIdAndDelete(req.params.id_vote);
        res.status(200).json({message: 'Article supprimé'});
    } catch (error) {
        res.status(500).json({message: 'erreur serveur'});
    }
}

exports.getAVote = async (req, res) => {
    try {
        const vote = await Vote.findById(req.params.id_vote);
        if (vote) {
            res.status(200).json(vote);
        } else {
            res.status(204).json({message: 'Vote not found.'})
        }
    } catch (error) {
        res.status(500).json({message: 'erreur serveur'});
    }
}