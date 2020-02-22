import { gql } from "apollo-boost";

export const UPLOAD_BOARD = gql`
  mutation upload(
    $type: String!
    $title: String!
    $content: String!
    $files: [String!]!
  ) {
    upload(type: $type, title: $title, content: $content, files: $files) {
      id
      title
      content
      files {
        url
      }
    }
  }
`;
