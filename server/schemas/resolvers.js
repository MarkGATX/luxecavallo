const {Mens, Womens, Accessory, Houseware} = require('../models')

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
    Query: {
      mens: async () => {
        // Get and return all documents from the classes collection
        return await Mens.find({});
      },
      womens: async() => {
        return await Womens.find({});
      },
      accessories: async() => {
        return await Accessory.find({});
      },
      housewares: async() => {
        return await Houseware.find({});
      }
   
  }
  };
  
  module.exports = resolvers;