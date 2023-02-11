const { Schema, model } = require('mongoose');

const womensSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        Gender: {
            type: String,
        },
        Size: {
            XS: Number,
            S: Number,
            M: Number,
            L: Number,
            XL: Number
        },
        imageURL: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        Price: {
            type: Number,
            required: true
        }
    }
);

const Womens = model('Womens', womensSchema);

module.exports = Womens;