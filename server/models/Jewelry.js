const { Schema, model } = require('mongoose');

const jewelrySchema = new Schema(
    {
        name: {
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        price: {
                type:Number,
                required:true,
            },
        Description: {
            type:String,
            required:true,
        },
        Stock: {
            type:Number,
            required:true,
        },
        imageURL: {
            type:String,
            required:true
        }    
    }
);

const Jewelry = model('Jewelry', jewelrySchema);

module.exports = Jewelry;