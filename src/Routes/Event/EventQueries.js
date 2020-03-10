import { gql } from "apollo-boost";

export const SEE_EVENT = gql`
  query seeEvent(
    $eventType: String
    $period: String
    $first: Int
    $last: Int
    $skip: Int
  ) {
    seeEvent(
      eventType: $eventType
      period: $period
      first: $first
      last: $last
      skip: $skip
    ) {
      id
      eventType
      title
      subTitle
      period
      content
      thumbnail
      files {
        url
      }
    }
  }
`;
