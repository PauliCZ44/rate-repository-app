import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native'
import { RepositoryItem } from './RepositoryItem'
import theme from './theme'
import { Suspense, useEffect, useState } from 'react'
import { Show } from './components/Show'
import Text from './components/Text'
import { useRepositories } from './hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
})

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4'
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4'
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4'
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4'
  }
]

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const { repositories, error, loading } = useRepositories()

  return (
    <>
      <Show when={!loading}>
        <FlatList
          data={repositories}
          ItemSeparatorComponent={ItemSeparator}
          // other props
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
