import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $userId: String!
    $password: String!
    $username: String!
    $nickname: String!
    $email: String!
    $phoneNum: String!
    $address: String
    $isAgree: Boolean!
  ) {
    createAccount(
      userId: $userId
      password: $password
      username: $username
      nickname: $nickname
      email: $email
      phoneNum: $phoneNum
      address: $address
      isAgree: $isAgree
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

export const EXIST_NICKNAME = gql`
  query existUserNickName($nickname: String!) {
    existUserNickName(nickname: $nickname)
  }
`;
