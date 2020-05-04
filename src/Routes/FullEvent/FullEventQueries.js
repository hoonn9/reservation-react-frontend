import { gql } from "apollo-boost";

export const SEE_FULL_EVENT = gql`
  query seeFullEvent($id: String!) {
    seeFullEvent(id: $id) {
      id
      eventType
      title
      subTitle
      period
      content
      files {
        url
      }
      createdAt
    }
  }
`;
