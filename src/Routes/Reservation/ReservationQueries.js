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
      user {
        id
        username
        bio
        email
        phoneNum
      }
      guest {
        id
        username
        bio
        email
        phoneNum
      }
      type {
        typeName
        price
      }
      subType {
        id
        subTypeName
        price
        description
      }
      checkIn
      checkOut
      count
      adult
      child
      needs
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

export const CHECK_RESERVATION = gql`
  query checkReservation($reservationId: String!) {
    checkReservation(reservationId: $reservationId) {
      id
      user {
        id
        username
        bio
        email
        phoneNum
      }
      noUser {
        id
        username
        bio
        email
        phoneNum
      }
      guest {
        id
        username
        bio
        phoneNum
        email
      }
      type {
        id
        typeName
        price
      }
      subType {
        id
        subTypeName
        price
        description
      }
      checkIn
      checkOut
      count
      adult
      child
      needs
      price
    }
  }
`;
