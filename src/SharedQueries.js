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

export const REQUEST_SECRET = gql`
  mutation requestSecret($name: String!, $email: String!) {
    requestSecret(name: $name, email: $email)
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($email: String!, $secret: String!) {
    confirmSecret(email: $email, secret: $secret)
  }
`;
