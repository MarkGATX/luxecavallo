import { gql } from '@apollo/client';


export const QUERY_MENS = gql`
  query getAllMens {
    mens {
        _id
        name
        category
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
        attribution
    }
  },
`;


export const QUERY_MENS_PRODUCT = gql`
query menSingleProd($id: ID!) {
  menSingleProd(_id: $id) {
    name
    category
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
    attribution
    care
  }
}
  `;




export const QUERY_WOMENS = gql`
  query getAllWomens {
    womens {
        _id
        name
        category
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
        attribution
    }
  },
`;


export const QUERY_WOMENS_PRODUCT = gql`
query womenSingleProd($id: ID!) {
  womenSingleProd(_id: $id) {
    name
    category
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
    attribution
    care
  }
}
  `;


export const QUERY_HOUSEWARE = gql`
  query getAllHousewares {
    housewares {
        _id
        name
        price
        description
        stock
        imageURL
        attribution
        category
    }
  },
`;


export const QUERY_HOUSEWARE_PRODUCT = gql`
query housewareSingleProd($id: ID!) {
  housewareSingleProd(_id: $id) {
    _id
    name
    price
    description
    stock
    imageURL
    attribution
    category
  }
}
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
        attribution
        category
    }
  },
`;


export const QUERY_ACCESSORY_PRODUCT = gql`
query accessorySingleProd($id: ID!) {
  accessorySingleProd(_id: $id) {
    _id
    name
    price
    description
    stock
    imageURL
    attribution
    category
  }
}
  `;
