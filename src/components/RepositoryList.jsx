import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native'
import { RepositoryItem } from './RepositoryItem'
import theme from '../theme'
import { Show } from './Show'
import Text from './Text'
import { useRepositories } from '../hooks/useRepositories'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
})

export const RepositoryListContainer = ({
  repositories,
  error = false,
  loading = false
}) => {
  return (
    <>
      <Show when={!loading}>
        <FlatList
          data={repositories}
          ItemSeparatorComponent={<View style={styles.separator} />}
          renderItem={({ item }) => {
            console.log(item)

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
          style={{
            backgroundColor: theme.colors.bgNeutralLight,
            paddingHorizontal: 4,
            paddingVertical: 4
          }}
        />
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
