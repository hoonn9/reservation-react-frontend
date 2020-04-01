import { gql } from "apollo-boost";

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($userId: String!, $password: String!) {
    loginUser(userId: $userId, password: $password)
  }
`;

export const BOARD_LIST = gql`
  query {
    seeBoardList {
      id
    }
  }
`;

export const SEE_POPUP = gql`
  query {
    seePopup {
      id
      title
      content
      url
    }
  }
`;

export const REQUEST_FIND_ID = gql`
  mutation requestFindID($name: String!, $email: String!) {
    requestFindID(name: $name, email: $email)
  }
`;

export const CONFIRM_FIND_ID = gql`
  mutation confirmFindID($email: String!, $secret: String!) {
    confirmFindID(email: $email, secret: $secret)
  }
`;

export const REQUEST_FIND_PW = gql`
  mutation requestFindPW($userId: String!, $email: String!) {
    requestFindPW(userId: $userId, email: $email)
  }
`;

export const CONFIRM_FIND_PW = gql`
  mutation confirmFindPW($email: String!, $userId: String!, $secret: String!) {
    confirmFindPW(email: $email, userId: $userId, secret: $secret)
  }
`;

export const REQUEST_NOUSER_SECRET = gql`
  mutation requestNoUserSecret($name: String!, $email: String!) {
    requestNoUserSecret(name: $name, email: $email)
  }
`;

export const CONFIRM_NOUSER_SECRET = gql`
  mutation confirmNoUserSecret($email: String!, $secret: String!) {
    confirmNoUserSecret(email: $email, secret: $secret)
  }
`;

export const CHECK_NOUSERS = gql`
  query noUserCheck(
    $username: String!
    $email: String!
    $loginSecret: String!
  ) {
    noUserCheck(username: $username, email: $email, loginSecret: $loginSecret) {
      id
      price
      checkIn
      checkOut
      type {
        typeName
        files {
          url
        }
      }
      subType {
        subTypeName
      }
      createdAt
    }
  }
`;
