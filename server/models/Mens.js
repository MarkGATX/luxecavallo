const { Schema, model } = require('mongoose');

const mensSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
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

const Mens = model('Mens', mensSchema);

module.exports = Mens;