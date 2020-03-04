import { gql } from "apollo-boost";

export const SEARCH_TYPE = gql`
  query searchType($checkIn: String!, $checkOut: String!) {
    searchType(checkIn: $checkIn, checkOut: $checkOut) {
      id
      typeName
      price
      typeCount
    }
  }
`;
