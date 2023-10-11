const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema ({
    note: {
        type: Number,
        required: true
    },
    music_id: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Vote', voteSchema);