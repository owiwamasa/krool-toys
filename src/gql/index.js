import { gql } from "graphql-request";

export const ALL_PROJECTS = gql`
  query Projects {
    projects {
      id
      instagramUrl
      publishedAt
      slug
      title
      featuredMedia {
        url
      }
      media {
        url
      }
    }
  }
`;

export const GENIE_TEXT = gql`
  query MyQuery {
    genieTexts {
      text
    }
  }
`;
