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
