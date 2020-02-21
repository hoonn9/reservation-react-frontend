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
