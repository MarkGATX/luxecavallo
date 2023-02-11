const { Schema, model } = require('mongoose');

const accessorySchema = new Schema(
    {
        Name: {
            type:String,
            required:true,
            trim:true,
        },
        Price: {
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