import { View, StyleSheet, Pressable } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgDark
  },
  pressable: {
    padding: 10,
    paddingTop: Constants.statusBarHeight
  }
})

const AppBar = () => {
  return (
    <View style={styles.container} id="container">
      <Pressable style={styles.pressable}>
        <Text color="white" fontSize={24} fontWeight="bold">
          Repositories
        </Text>
      </Pressable>
    </View>
  )
}

export default AppBar
