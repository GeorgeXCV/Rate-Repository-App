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
      reviews {
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
        }
      }
    }
`

export const USER = gql`
  fragment User on User {
    id
    username
  }
`