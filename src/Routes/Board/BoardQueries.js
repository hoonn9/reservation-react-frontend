import { gql } from "apollo-boost";

export const SEE_BOARD = gql`
  query seeBoard($type: String!) {
    seeBoard(type: $type) {
      id
      title
      views
      user {
        username
      }
      createdAt
    }
  }
`;
