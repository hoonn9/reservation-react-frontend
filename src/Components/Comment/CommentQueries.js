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
