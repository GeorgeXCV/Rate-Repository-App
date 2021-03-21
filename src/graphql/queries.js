import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS, REPOSITORY_FULL_DETAILS, USER } from "./fragments";

export const GET_REPOSITORIES = gql`
  query repositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String)  {
      repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
          edges {
              node {
                  ...RepositoryDetails
                }
            },
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
        }
      }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
      ...RepositoryFullDetails 
    }
  }
  ${REPOSITORY_DETAILS}
  ${REPOSITORY_FULL_DETAILS}
`;

export const GET_USER = gql`
  query {
    authorizedUser {
      ...User
    }
  }
  ${USER}
`;