import { gql } from "apollo-boost";

export const CREATE_COMMENT = gql`
  mutation createComment($postId: String!, $text: String!) {
    createComment(postId: $postId, text: $text) {
      id
      text
      nickname
      createdAt
    }
  }
`;

export const SEE_COMMENT_COUNT = gql`
  query seeCommentCount($postId: String!) {
    seeCommentCount(postId: $postId)
  }
`;

export const SEE_COMMENT = gql`
  query seeComment($postId: String!, $first: Int, $last: Int, $skip: Int) {
    seeComment(postId: $postId, first: $first, last: $last, skip: $skip) {
      id
      text
      nickname
      createdAt
    }
  }
`;
