import { gql } from "graphql-request";

export const ALL_PROJECTS = gql`
  query Projects {
    projects {
      id
      title
      subtitle {
        text
      }
      description {
        text
      }
      featuredMedia {
        url
      }
      otherMedia {
        url
      }
    }
  }
`;

export const ABOUT_PAGE = gql`
  query MyQuery {
    aboutUsPages {
      description
      media {
        url
      }
    }
  }
`;
