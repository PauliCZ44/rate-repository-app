import { StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  helperText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    flexShrink: 1
  },
  errorText: {
    color: theme.colors.error
  }
})

type HelperFormTextProps = {
  error: boolean
  children: React.ReactNode | any // Formik ts errors
}

export const HelperFormText = ({ error, children }: HelperFormTextProps) => {
  return (
    <Text style={[styles.helperText, error && styles.errorText]}>
      {children}
    </Text>
  )
}
