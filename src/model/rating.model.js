import Mongoose from 'mongoose'

const ratingSchema = new Mongoose.Schema({
    safetyRating: {
        type: Number,
        required: true
    },
    communicationRating: {
        type: Number,
        required: true
    },
    recommend: {
        type: Boolean,
        required: true
    },
    praise: {
        type: String,
        required: true
    }
})

const model =  Mongoose.model('Rating', ratingSchema)

export default model