const { gql } = require('apollo-server-express');


const typeDefs = gql`
  # Define which fields are accessible from the model
  type Mens {
    _id: ID
    name: String!
    category: String
    size: Size
    imageURL: String!
    description: String!
    price: Int!
    attribution: String
    care:String
  }
 
  type Womens {
    _id: ID
    name: String!
    category: String
    size: Size
    imageURL: String!
    description: String!
    price: Int!
    attribution: String
    care: String
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
    category: String
}


type Houseware {
    _id: ID
    name:String!
    price:Float!
    description:String!
    stock:Int!
    imageURL:String!
    attribution: String
    category: String
}
 
type Query {
    mens: [Mens!]!
    menSingleProd(_id: ID!): Mens
    womens: [Womens!]!
    womenSingleProd(_id: ID!): Womens
    accessories: [Accessory]
    accessorySingleProd(_id: ID!): Accessory
    housewares: [Houseware]
    housewareSingleProd(_id: ID!): Houseware
  }
 
`;

module.exports = typeDefs;