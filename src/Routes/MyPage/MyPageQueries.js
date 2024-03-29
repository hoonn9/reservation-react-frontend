import { gql } from "apollo-boost";

export const ME = gql`
  query {
    me {
      id
      userId
      username
      nickname
      bio
      email
      phoneNum
      address
      createdAt
    }
  }
`;

export const CHANGE_PW = gql`
  mutation updatePW($currentPw: String!, $newPw: String!) {
    updatePW(currentPw: $currentPw, newPw: $newPw)
  }
`;

export const CHECK_USER_RESERVATIONS = gql`
  query {
    userCheck {
      id
      checkIn
      checkOut
      price
      room {
        id
        name
        files {
          id
          url
        }
      }
      pack {
        id
        name
      }
      createdAt
    }
  }
`;
