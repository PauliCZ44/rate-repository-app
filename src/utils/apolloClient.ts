import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import Constants from 'expo-constants'
import AuthStorage from './authStorage'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: Constants.expoConfig.extra.APOLLO_URI
})

const createApolloClient = (AuthStorage: AuthStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await AuthStorage.getAccessToken()
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : ''
        }
      }
    } catch (e) {
      console.error(e)
      return {
        headers
      }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
}

export default createApolloClient
