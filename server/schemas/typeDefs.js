const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the model
  type Mens {
    Name: String!
    Gender: String
    Size: Size
    imageURL: String!
    Description: String!
    Price: Float!
  }
  
  type Womens {
    Name: String!
    Gender: String
    Size: Size
    imageURL: String!
    Description: String!
    Price: Float!
  }

type Size {
    XS: Float
    S: Float
    M: Float
    L: Float
    XL: Float
  }

type Accessory {
    Name:String!
    Price:Float!
    Description:String!
    Stock:Float!
    imageURL:String!
}

type Houseware {
    name:String!
    price:Float!
    description:String!
    stock:Float!
    imageURL:String!
}
  

  
type Query {
    mens: [Mens]
    womens: [Womens]
    accessories: [Accessory]
    housewares: [Houseware]
  }
  
`;

module.exports = typeDefs;
