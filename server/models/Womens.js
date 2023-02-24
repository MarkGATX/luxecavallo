const { Schema, model } = require('mongoose');

const womensSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
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
        },
        care: {
            type:String,
        }
    }
);

const Womens = model('Womens', womensSchema);

module.exports = Womens;