const { Schema, model } = require('mongoose');

const accessorySchema = new Schema(
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

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;