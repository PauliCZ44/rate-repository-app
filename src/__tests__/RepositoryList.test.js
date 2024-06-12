import { render, fireEvent, screen } from '@testing-library/react-native'
import { RepositoryListContainer } from '../RepositoryList'
import { formatter } from '../utils/numberFormatter'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd'
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
                'https://avatars2.githubusercontent.com/u/4060187?v=4'
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd'
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
                'https://avatars1.githubusercontent.com/u/54310907?v=4'
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ=='
          }
        ]
      }

      const repositoriesListItems = repositories.edges.map((edge) => edge.node)

      render(
        <RepositoryListContainer
          repositories={repositoriesListItems}
          loading={false}
          error={false}
        />
      )
      const repositoryItems = screen.getAllByTestId('repositoryItem')

      // repository's name, description, language, forks count, stargazers count, rating average, and review count
      repositoryItems.forEach((repositoryItem, index) => {
        const { node } = repositories.edges[index]
        expect(repositoryItem).toHaveTextContent(node.fullName)
        expect(repositoryItem).toHaveTextContent(node.description)
        expect(repositoryItem).toHaveTextContent(node.language)
        expect(repositoryItem).toHaveTextContent(formatter(node.forksCount))
        expect(repositoryItem).toHaveTextContent(
          formatter(node.stargazersCount)
        )
        expect(repositoryItem).toHaveTextContent(formatter(node.ratingAverage))
        expect(repositoryItem).toHaveTextContent(formatter(node.reviewCount))
      })
    })
  })
})
