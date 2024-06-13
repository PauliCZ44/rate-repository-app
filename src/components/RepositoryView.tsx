import { useQuery } from '@apollo/client'
import { RepositoryItem } from './RepositoryItem'
import { GET_REPOSITORY } from '../graphql/queries'
import { useParams } from 'react-router-native'
import { ActivityIndicator, Pressable, View } from 'react-native'
import { Button } from './Button'
import * as Linking from 'expo-linking'
import theme from '../theme'
import { RepoWrapper } from './RepoWrapper'
import { Separator } from './Separator'

export const RepositoryView = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network'
  })

  console.log({ id, data })

  const handleButtonPres = () => {
    Linking.openURL(data.repository.url)
  }

  if (loading) {
    return (
      <View style={{ margin: 'auto' }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    )
  }

  return (
    <RepoWrapper>
      <Separator />
      <RepositoryItem {...data.repository}>
        <Button
          isBig
          onPress={handleButtonPres}
          style={{ marginTop: theme.spacing(2) }}
        >
          View on GitHub
        </Button>
      </RepositoryItem>
    </RepoWrapper>
  )
}
1
