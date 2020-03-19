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
