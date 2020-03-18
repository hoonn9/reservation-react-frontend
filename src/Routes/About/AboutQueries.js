import { gql } from "apollo-boost";

export const SEE_TYPE = gql`
  query {
    seeType {
      id
      typeName
      files {
        url
      }
    }
  }
`;
