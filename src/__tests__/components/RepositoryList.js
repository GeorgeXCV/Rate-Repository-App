import React from "react";
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from "../../components/RepositoryList";

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('Renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };

        const { getAllByTestId } = render( <RepositoryListContainer repositories={repositories} />);
        
        const names = getAllByTestId("name");
        const descriptions = getAllByTestId("description");
        const languages = getAllByTestId("language");
        const starCounts = getAllByTestId("starCount");
        const forkCounts = getAllByTestId("forkCount");
        const reviewCounts = getAllByTestId("reviewCount");
        const ratings = getAllByTestId("rating");

        for (let index = 0; index < repositories.length; index++) {
          expect(names[index]).toHaveTextContent(repositories.edges[index].node.fullName)
          expect(descriptions[index]).toHaveTextContent(repositories.edges[index].node.description)
          expect(languages[index]).toHaveTextContent(repositories.edges[index].node.language)
          expect(starCounts[index]).toHaveTextContent(repositories.edges[index].node.stargazersCount)
          expect(forkCounts[index]).toHaveTextContent(repositories.edges[index].node.forksCount)
          expect(reviewCounts[index]).toHaveTextContent(repositories.edges[index].node.reviewCount)
          expect(ratings[index]).toHaveTextContent(repositories.edges[index].node.ratingAverage)
        }
      });
    });
  });