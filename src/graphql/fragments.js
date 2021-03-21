import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    ratingAverage
    reviewCount
  }
`;

export const REPOSITORY_FULL_DETAILS = gql`
  fragment RepositoryFullDetails on Repository {
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
`

export const USER = gql`
  fragment User on User {
    id
    username
    reviews @include(if: $includeReviews)  {
      edges {
        node {
          id
          text
          rating
          createdAt
          repository {
            fullName
            id
          }
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`