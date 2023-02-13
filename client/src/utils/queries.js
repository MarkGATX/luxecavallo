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
  }
`;