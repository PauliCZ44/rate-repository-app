import { StyleSheet, View } from 'react-native'
import theme from '../theme'

export const wrapperStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.bgNeutralLight,
    flex: 1
  }
})

export const RepoWrapper = ({ children }) => {
  return <View style={wrapperStyles.wrapper}>{children}</View>
}
