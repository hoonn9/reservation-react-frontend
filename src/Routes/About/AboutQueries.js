import { gql } from "apollo-boost";

export const SEE_ROOM = gql`
  query {
    seeRoom {
      id
      name
      files {
        url
      }
    }
  }
`;
