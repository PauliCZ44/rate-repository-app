import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import Text from './Text'
import { Link, LinkProps } from 'react-router-native'
import { useSignIn } from '../hooks/useSignIn'
import useAuthStorage from '../hooks/useAuthStorage'
import { Show } from './Show'
import { useApolloClient, useQuery } from '@apollo/client'
import { USER } from '../graphql/queries'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgDark,
    paddingTop: Constants.statusBarHeight
  },
  link: {
    paddingHorizontal: 10,
    paddingBottom: 10
  }
})

const TabLink = ({ children, style, ...props }: LinkProps) => {
  return (
    <Link style={[styles.link, style]} {...props}>
      <Text color="white" fontSize={20} fontWeight="bold">
        {children}
      </Text>
    </Link>
  )
}

const AppBar = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const userQuery = useQuery(USER)

  const isSignedIn = userQuery.data?.me !== null

  console.log({ authStorage, userQuery })

  const handleSignOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return (
    <View style={styles.container} id="container">
      <ScrollView horizontal style={{ width: '100%' }}>
        <TabLink to={'/'}>Repositories</TabLink>

        <TabLink
          style={{ marginLeft: 'auto' }}
          to={'/signin'}
          onPress={isSignedIn ? handleSignOut : undefined}
        >
          {isSignedIn ? 'Sign Out' : 'Sign In'}
        </TabLink>
      </ScrollView>
    </View>
  )
}

export default AppBar
