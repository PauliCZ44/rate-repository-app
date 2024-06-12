import { Image, StyleSheet, View } from 'react-native'
import theme from './theme'
import Text from './components/Text'
import { Stat } from './components/Stat'

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fCfCfC',
    padding: 8,
    maxWidth: 512,
    width: '100%',
    margin: 'auto'
  },
  title: {
    fontSize: 16
  },
  lang: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
  avatar: {
    borderRadius: 2,
    width: 48,
    height: 48
  },
  upperContainer: {
    flexDirection: 'row',
    gap: 8
  },
  statWrapper: {
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  mainWrapper: { flexDirection: 'column', gap: 4, flex: 1 }
})

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
  <View style={styles.item} id={id} testID="repositoryItem">
    <View style={styles.upperContainer}>
      <Image
        id={ownerAvatarUrl}
        height={32}
        width={32}
        source={{
          uri: ownerAvatarUrl
        }}
        alt={fullName}
        style={styles.avatar}
      />
      <View style={styles.mainWrapper}>
        <Text fontWeight="bold">{fullName}</Text>
        <Text color="textSecondary">{description}</Text>
        <Text style={styles.lang}>{language}</Text>
      </View>
    </View>
    <View style={styles.statWrapper}>
      <Stat label="Stars" value={stargazersCount} />
      <Stat label="Forks" value={forksCount} />
      <Stat label="Reviews" value={reviewCount} />
      <Stat label="Rating" value={ratingAverage} />
    </View>
  </View>
)
