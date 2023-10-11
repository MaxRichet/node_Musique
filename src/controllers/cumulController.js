const Vote = require('../models/voteModels');

exports.cumulAllVotes = async (req, res) => {
    try {
        const cumul = await Vote.find({}, 'note');
        let somme = 0;
        donnees.forEach((item) => {
            somme += item.note;
        });
        res.json({ somme });
    } catch (error) {
        res.status(500).json({message: 'Erreur serveurdffee'});
    }
}