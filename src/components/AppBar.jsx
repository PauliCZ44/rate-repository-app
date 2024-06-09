import { View, StyleSheet, Pressable } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import Text from './Text'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgDark,
    flexDirection: 'row',
    alignContent: 'space-between',
    paddingTop: Constants.statusBarHeight
  },
  link: {
    paddingHorizontal: 10,
    paddingBottom: 10
  }
})

const TabLink = ({ children, style, ...props }) => {
  return (
    <Link style={[styles.link, style]} {...props}>
      <Text color="white" fontSize={20} fontWeight="bold">
        {children}
      </Text>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container} id="container">
      <TabLink to={'/'}>Repositories</TabLink>
      <TabLink style={{ marginLeft: 'auto' }} to={'/signIn'}>
        Sign In
      </TabLink>
    </View>
  )
}

export default AppBar
