const {Mens, Womens, Accessory, Houseware} = require('../models')


// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
    Query: {
      mens: async () => {
        // Get and return all documents from the mens collection
        return await Mens.find();
      },
      menSingleProd: async (parent, {_id}) => {
        return await Mens.findById(_id);      
      },
      womens: async() => {
        return await Womens.find();
      },
      womenSingleProd: async (parent, {_id}) => {
        return await Womens.findById(_id);      
      },
      accessories: async() => {
        return await Accessory.find();
      },
      accessorySingleProd: async (parent, {_id}) => {
        return await Accessory.findById(_id);      
      },
      housewares: async() => {
        return await Houseware.find();
      },
      housewareSingleProd: async (parent, {_id}) => {
        return await Houseware.findById(_id);      
      }
   
  }
  };
 
  module.exports = resolvers;