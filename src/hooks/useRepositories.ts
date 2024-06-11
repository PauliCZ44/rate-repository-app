import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_REPOSITORIES } from '../graphql/queries'

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

    const fetchRepositories = async () => {
        const { loading, error, data } = useQuery(GET_REPOSITORIES);
        
        
    setLoading(true)
    try {
      const response = await fetch('http://192.168.0.136:5000/api/repositories')
      const json = await response.json()

      console.log(json)

      setRepositories(json)
    } catch (error) {
      console.error(error)
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return { repositories: repositoryNodes, loading, error }
}
