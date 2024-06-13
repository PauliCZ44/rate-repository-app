import { useQuery } from '@apollo/client'
import { RepositoryItem } from './RepositoryItem'
import Text from './Text'
import { GET_REPOSITORY } from '../graphql/queries'
import { useParams } from 'react-router-native'
import { Pressable } from 'react-native'
import { Button } from './Button'
import * as Linking from 'expo-linking'
import theme from '../theme'

export const RepositoryView = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network'
  })

  console.log(data)
  console.log({ id })

  const handleButtonPres = () => {
    Linking.openURL(data.repository.url)
  }

  return (
    <RepositoryItem {...data}>
      <Button
        onPress={handleButtonPres}
        style={{ marginTop: theme.spacing(1.5) }}
      >
        View on GitHub
      </Button>
    </RepositoryItem>
  )
}
1
