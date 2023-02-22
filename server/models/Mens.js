const { Schema, model } = require('mongoose');

const mensSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        category: {
            type: String,
        },
        size: {
            xs: Number,
            s: Number,
            m: Number,
            l: Number,
            xl: Number
        },
        imageURL: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        attribution: {
            type:String,
        }
    }
);

const Mens = model('Mens', mensSchema);

module.exports = Mens;