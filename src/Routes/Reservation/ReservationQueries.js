import { gql } from "apollo-boost";

export const SEARCH_TYPE = gql`
  query searchType($count: Int!, $checkIn: String!, $checkOut: String!) {
    searchType(count: $count, checkIn: $checkIn, checkOut: $checkOut) {
      id
      typeName
      files {
        url
      }
      price
      typeCount
      subTypes {
        id
        price
        subTypeName
        description
      }
    }
  }
`;

export const USER_RESERVE_TYPE = gql`
  mutation userReservation(
    $typeId: String!
    $subTypeId: String!
    $guestUserName: String!
    $guestUserSex: String!
    $guestUserPhone: String!
    $guestUserEmail: String!
    $count: Int!
    $adult: Int!
    $child: Int!
    $needs: String!
    $checkIn: String!
    $checkOut: String!
  ) {
    userReservation(
      typeId: $typeId
      subTypeId: $subTypeId
      guestUserName: $guestUserName
      guestUserSex: $guestUserSex
      guestUserPhone: $guestUserPhone
      guestUserEmail: $guestUserEmail
      count: $count
      adult: $adult
      child: $child
      needs: $needs
      checkIn: $checkIn
      checkOut: $checkOut
    ) {
      id
    }
  }
`;

export const NO_USER_RESERVE_TYPE = gql`
  mutation noUserReservation(
    $typeId: String!
    $subTypeId: String!
    $reserveUserName: String!
    $reserveUserSex: String!
    $reserveUserPhone: String!
    $reserveUserEmail: String!
    $guestUserName: String!
    $guestUserSex: String!
    $guestUserPhone: String!
    $guestUserEmail: String!
    $count: Int!
    $adult: Int!
    $child: Int!
    $needs: String!
    $checkIn: String!
    $checkOut: String!
  ) {
    noUserReservation(
      typeId: $typeId
      subTypeId: $subTypeId
      reserveUserName: $reserveUserName
      reserveUserSex: $reserveUserSex
      reserveUserPhone: $reserveUserPhone
      reserveUserEmail: $reserveUserEmail
      guestUserName: $guestUserName
      guestUserSex: $guestUserSex
      guestUserPhone: $guestUserPhone
      guestUserEmail: $guestUserEmail
      count: $count
      adult: $adult
      child: $child
      needs: $needs
      checkIn: $checkIn
      checkOut: $checkOut
    ) {
      id
    }
  }
`;
