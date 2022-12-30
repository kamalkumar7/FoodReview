import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    review: String,
    rating:{
        type: String,
        default: 0
    },
    creator: String,
    location: {
        type: String,
        default: "_",
    },
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;