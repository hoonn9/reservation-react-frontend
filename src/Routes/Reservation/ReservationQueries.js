import { gql } from "apollo-boost";

export const SEARCH_ROOM = gql`
  query searchRoom($count: Int!, $checkIn: String!, $checkOut: String!) {
    searchRoom(count: $count, checkIn: $checkIn, checkOut: $checkOut) {
      id
      name
      files {
        url
      }
      price
      count
      packs {
        id
        price
        name
        description
      }
    }
  }
`;

export const USER_RESERVE_ROOM = gql`
  mutation userReservation(
    $roomId: String!
    $packId: String!
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
      roomId: $roomId
      packId: $packId
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
      room {
        name
        price
      }
      pack {
        id
        name
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

export const NO_USER_RESERVE_ROOM = gql`
  mutation noUserReservation(
    $roomId: String!
    $packId: String!
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
      roomId: $roomId
      packId: $packId
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
      room {
        id
        name
        price
      }
      pack {
        id
        name
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
