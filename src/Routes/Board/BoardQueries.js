import { gql } from "apollo-boost";

export const SEE_BOARD = gql`
  query seeBoard(
    $boardId: String!
    $type: String!
    $first: Int
    $last: Int
    $skip: Int
  ) {
    seeBoard(
      boardId: $boardId
      type: $type
      first: $first
      last: $last
      skip: $skip
    ) {
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
  query seeBoardCount($boardId: String!, $type: String!) {
    seeBoardCount(boardId: $boardId, type: $type)
  }
`;
