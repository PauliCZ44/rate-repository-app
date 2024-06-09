import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native-web'

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fCfCfC',
    paddingVertical: 8
  },
  title: {
    fontSize: 16
  }
})

// id: 'reduxjs.redux',
// fullName: 'reduxjs/redux',
// description: 'Predictable state container for JavaScript apps',
// language: 'TypeScript',
// forksCount: 13902,
// stargazersCount: 52869,
// ratingAverage: 0,
// reviewCount: 0,
// ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',

export const RepositoryItem = ({
  description,
  forksCount,
  fullName,
  id,
  language,
  ownerAvatarUrl,
  ratingAverage,
  reviewCount,
  stargazersCount
}) => (
  <View style={styles.item} id={id} data-url={ownerAvatarUrl}>
    <Text style={styles.title}>Full name: {fullName}</Text>
    <Text style={styles.title}>Description: {description}</Text>
    <Text style={styles.title}>Language: {language}</Text>
    <Text style={styles.title}>Stars: {stargazersCount}</Text>
    <Text style={styles.title}>Forks: {forksCount}</Text>
    <Text style={styles.title}>Reviews: {reviewCount}</Text>
    <Text style={styles.title}>Rating: {ratingAverage}</Text>
  </View>
)
