import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native'
import { RepositoryItem } from './RepositoryItem'
import theme from './theme'
import { Show } from './components/Show'
import Text from './components/Text'
import { useRepositories } from './hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
})

const RepositoryList = () => {
  const { repositories, error, loading } = useRepositories()

  return (
    <>
      <Show when={!loading}>
        <FlatList
          data={repositories}
          ItemSeparatorComponent={<View style={styles.separator} />}
          renderItem={({ item }) => <RepositoryItem {...item} />}
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

export default RepositoryList
