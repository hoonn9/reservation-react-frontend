import { gql } from "apollo-boost";

export const SEE_HOME = gql`
  query seeHome {
    seeHome {
      seePopup {
        id
        title
        content
        url
      }
      seeType {
        id
        typeName
        files {
          url
        }
      }
      seeEvent {
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
      seeBoard {
        id
        title
        views
        user {
          username
        }
        createdAt
      }
    }
  }
`;
