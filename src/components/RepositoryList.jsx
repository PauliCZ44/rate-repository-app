import { FlatList, View, ActivityIndicator } from 'react-native'
import { RepositoryItem } from './RepositoryItem'
import theme from '../theme'
import { Show } from './Show'
import Text from './Text'
import { useRepositories } from '../hooks/useRepositories'
import { Link } from 'react-router-native'
import { RepoWrapper, wrapperStyles } from './RepoWrapper'
import { Separator } from './Separator'

export const RepositoryListContainer = ({
  repositories,
  error = false,
  loading = false
}) => {
  return (
    <>
      <Show when={!loading}>
        <RepoWrapper>
          <FlatList
            ListHeaderComponent={<Separator />}
            ListFooterComponent={<Separator />}
            style={wrapperStyles.wrapper}
            data={repositories}
            ItemSeparatorComponent={<Separator />}
            renderItem={({ item }) => {
              return (
                <Link
                  style={{ display: 'contents' }}
                  to={`/repositories/${item.id}`}
                  data-to={`/repositories/${item.id}`}
                >
                  <RepositoryItem {...item} />
                </Link>
              )
            }}
          />
        </RepoWrapper>
      </Show>

      <Show when={error}>
        <Text error>Something went wrong...</Text>
      </Show>

      <Show when={loading}>
        <View style={{ margin: 'auto' }}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      </Show>
    </>
  )
}

const RepositoryList = () => {
  const { repositories, error, loading } = useRepositories()

  return <RepositoryListContainer {...{ repositories, error, loading }} />
}

export default RepositoryList
