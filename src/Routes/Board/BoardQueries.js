import { gql } from "apollo-boost";

export const SEE_BOARD = gql`
  query seeBoard($type: String!, $first: Int, $last: Int, $skip: Int) {
    seeBoard(type: $type, first: $first, last: $last, skip: $skip) {
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

export const SEE_BOARD_COUNT = gql`
  query seeBoardCount($type: String!) {
    seeBoardCount(type: $type)
  }
`;
