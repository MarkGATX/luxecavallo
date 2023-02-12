import { gql } from '@apollo/client';

export const QUERY_MENS = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getAllMens {
    mens {
        _id
        Name
        Gender
        Size {
            XS
            S
            M
            L
            XL
        }
        imageURL
        Description
        Price
    }
  }
`;