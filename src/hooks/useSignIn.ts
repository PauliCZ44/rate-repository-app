import {
  FetchResult,
  MutationResult,
  gql,
  useApolloClient,
  useMutation
} from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'
import { useNavigate } from 'react-router-native'

export type SignInData = {
  username: string
  password: string
}

export const useSignIn = (): [
  ({ username, password }: SignInData) => Promise<FetchResult<any>>,
  MutationResult<any>
] => {
  const authStorage = useAuthStorage()
  const navigate = useNavigate()
  const apolloClient = useApolloClient()
  const [mutate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }: SignInData) => {
    const res = await mutate({
      variables: { credentials: { username, password } }
    })
    if (res.data) {
      await authStorage.setAccessToken(res.data.authenticate.accessToken)
      apolloClient.resetStore()
      console.log('Token set successfully!')
      navigate('/')
    }
    return res
  }

  return [signIn, result]
}
