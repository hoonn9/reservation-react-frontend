import { gql } from "apollo-boost";

export const ME = gql`
  query {
    me {
      userId
      username
      email
      phoneNum
      address
      createdAt
    }
  }
`;
