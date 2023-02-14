const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    content: {
        type: String,
        required: true
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
    }, {
      timestamps: true
});


const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
    location: {
        type: String,
        requried: true
    },
    continent: {
        type: String,
        enum: ['North America', 'South America', 'Asia', 'Africa', 'Europe', 'Oceania', 'Antartica'],
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        default: 10,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentsSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);