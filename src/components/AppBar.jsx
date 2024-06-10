import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import Text from './Text'
import { Link } from 'react-router-native'

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
      <ScrollView horizontal style={{ width: '100%' }}>
        <TabLink to={'/'}>Repositories</TabLink>
        <TabLink style={{ marginLeft: 'auto' }} to={'/signin'}>
          Sign In
        </TabLink>
      </ScrollView>
    </View>
  )
}

export default AppBar
