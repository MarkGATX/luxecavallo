const { Schema, model } = require('mongoose');

const housewareSchema = new Schema(
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
        description: {
            type:String,
            required:true,
        },
        stock: {
            type:Number,
            required:true,
        },
        imageURL: {
            type:String,
            required:true
        } ,
        attribution: {
            type:String,
        } ,
        category: {
            type: String,
        }  
    }
);

const Houseware = model('Houseware', housewareSchema);

module.exports = Houseware;