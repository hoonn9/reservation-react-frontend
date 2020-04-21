import { gql } from "apollo-boost";

export const UPLOAD_BOARD = gql`
  mutation upload(
    $boardId: String
    $postType: String!
    $title: String!
    $content: String!
    $files: [String!]!
  ) {
    upload(
      boardId: $boardId
      postType: $postType
      title: $title
      content: $content
      files: $files
    ) {
      id
      title
      content
      files {
        url
      }
    }
  }
`;
