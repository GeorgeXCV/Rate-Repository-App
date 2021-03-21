import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS, REPOSITORY_FULL_DETAILS, USER } from "./fragments";

export const GET_REPOSITORIES = gql`
  query repositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String)  {
      repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
          edges {
              node {
                  ...RepositoryDetails
                }
                cursor
            },
          pageInfo {
            startCursor
            endCursor
            hasNextPage
          }
        }
      }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryDetails
      ...RepositoryFullDetails 
    }
  }
  ${REPOSITORY_DETAILS}
  ${REPOSITORY_FULL_DETAILS}
`;

export const GET_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      ...User
    }
  }
  ${USER}
`;