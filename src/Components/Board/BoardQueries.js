import { gql } from "apollo-boost";

export const SEE_BOARD = gql`
  query seeBoard(
    $boardId: String!
    $postType: String!
    $first: Int
    $last: Int
    $skip: Int
  ) {
    seeBoard(
      boardId: $boardId
      postType: $postType
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
  query seeBoardCount($boardId: String!, $postType: String!) {
    seeBoardCount(boardId: $boardId, postType: $postType)
  }
`;
