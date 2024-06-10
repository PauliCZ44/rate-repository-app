import { Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    flexShrink: 1
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  }
})

type TextProps = {
  color?: 'textPrimary' | 'textSecondary' | 'primary' | 'white' | 'error'
  fontSize?: 'subheading' | number
  fontWeight?: 'bold'
  style?: {}
} & NativeText['props']

const Text = ({ color, fontSize, fontWeight, style, ...props }: TextProps) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'white' && { color: theme.colors.textWhite },
    color === 'error' && { color: theme.colors.error },
    fontSize === 'subheading' && styles.fontSizeSubheading,
    typeof fontSize === 'number' && { fontSize: fontSize },
    fontWeight === 'bold' && styles.fontWeightBold,
    style
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text
