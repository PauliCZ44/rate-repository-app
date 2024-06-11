import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_REPOSITORIES } from '../graphql/queries'

export const useRepositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })
  console.log('data', data)
  // Get the nodes from the edges array
  const repositories = data
    ? data.repositories.edges.map((edge) => edge.node)
    : []

  return { repositories, loading, error }
}
