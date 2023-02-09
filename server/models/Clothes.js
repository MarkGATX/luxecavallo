const { Schema, model } = require('mongoose');

const clothesSchema = new Schema(
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
        Size: [
            {
                XS: {
                    type: Number,
                }
            },
            {
                S: {
                    type: Number,
                }
            },
            {
                M: {
                    type: Number,
                }
            },
            {
                L: {
                    type: Number,
                },
            },
            {
                XL: {
                    type: Number,
                }
            }
        ],
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

const Clothes = model('Clothes', clothesSchema);

module.exports = Clothes;