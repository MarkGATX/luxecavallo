const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the model
  type Mens {
    _id: ID
    name: String!
    gender: String
    size: Size
    imageURL: String!
    description: String!
    price: Int!
    attribution: String
  }
  
  type Womens {
    _id: ID
    name: String!
    gender: String
    size: Size
    imageURL: String!
    description: String!
    price: Int!
    attribution: String
  }

type Size {
    xs: Int
    s: Int
    m: Int
    l: Int
    xl: Int
  }

type Accessory {
    _id: ID
    name:String!
    price:Float!
    description:String!
    stock:Int!
    imageURL:String!
    attribution: String
}

type Houseware {
    _id: ID
    name:String!
    price:Float!
    description:String!
    stock:Int!
    imageURL:String!
    attribution: String
}
  

  
type Query {
    mens: [Mens!]!
    womens: [Womens!]!
    accessories: [Accessory]
    housewares: [Houseware]
  }
  
`;

module.exports = typeDefs;
