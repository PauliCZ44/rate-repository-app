import { FetchResult, MutationResult, gql, useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'

export type SignInData = {
  username: string
  password: string
}

export const useSignIn = (): [
  ({ username, password }: SignInData) => Promise<FetchResult<any>>,
  MutationResult<any>
] => {
  const [mutate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }: SignInData) => {
    const res = await mutate({
      variables: { credentials: { username, password } }
    })
    return res
  }

  return [signIn, result]
}
