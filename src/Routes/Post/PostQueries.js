import { gql } from "apollo-boost";

export const SEE_FULL_POST = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      id
      title
      content
      views
      board {
        name
      }
      user {
        username
      }
      comments {
        id
        nickname
        text
        createdAt
      }
      createdAt
    }
  }
`;
