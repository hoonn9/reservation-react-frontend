import { gql } from "apollo-boost";

export const SEARCH_TYPE = gql`
  query searchType($count: Int!, $checkIn: String!, $checkOut: String!) {
    searchType(count: $count, checkIn: $checkIn, checkOut: $checkOut) {
      id
      typeName
      price
      typeCount
      subTypes {
        id
        price
        subTypeName
        description
      }
    }
  }
`;
