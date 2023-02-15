import { gql } from '@apollo/client';

export const QUERY_MENS = gql`
  query getAllMens {
    mens {
        _id
        name
        gender
        size {
            xs
            s
            m
            l
            xl
        }
        imageURL
        description
        price
    }
  },
`;

export const QUERY_WOMENS = gql`
  query getAllWomens {
    womens {
        _id
        name
        gender
        size {
            xs
            s
            m
            l
            xl
        }
        imageURL
        description
        price
    }
  },
`;

export const QUERY_HOUSE = gql`
  query getAllHousewares {
    housewares {
        _id
        name
        price
        description
        stock
        imageURL
    }
  },
`;
export const QUERY_ACCESSORY = gql`
  query getAllAccessories {
    accessories {
      _id
        name
        price
        description
        stock
        imageURL
    }
  },
`;