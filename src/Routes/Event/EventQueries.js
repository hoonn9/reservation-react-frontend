import { gql } from "apollo-boost";

export const SEE_EVENT = gql`
  query seeEvent(
    $type: String
    $period: String
    $first: Int
    $last: Int
    $skip: Int
  ) {
    seeEvent(
      type: $type
      period: $period
      first: $first
      last: $last
      skip: $skip
    ) {
      id
      title
      subTitle
      period
      content
      files {
        url
      }
    }
  }
`;
