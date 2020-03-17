import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $userId: String!
    $password: String!
    $username: String!
    $email: String!
    $phoneNum: String!
    $address: String
  ) {
    createAccount(
      userId: $userId
      password: $password
      username: $username
      email: $email
      phoneNum: $phoneNum
      address: $address
    )
  }
`;

export const EXIST_ID = gql`
  query existUserId($userId: String!) {
    existUserId(userId: $userId)
  }
`;

export const EXIST_EMAIL = gql`
  query existUserEmail($email: String!) {
    existUserEmail(email: $email)
  }
`;
