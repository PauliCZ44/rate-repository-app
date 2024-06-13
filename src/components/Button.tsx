import { Pressable, PressableProps, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  buttonPressed: {
    backgroundColor: theme.colors.primaryDark
  },
  buttonFocused: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.colors.primaryDark
  },
  text: {
    fontWeight: theme.fontWeights.semiBold,
    textTransform: 'uppercase',
    color: theme.colors.textWhite,
    textAlign: 'center'
  }
})

export const Button = ({
  style,
  ...props
}: PressableProps & { children: string }) => {
  return (
    <Pressable
      //@ts-ignore
      style={({ pressed, focused }) => {
        return [
          styles.button,
          pressed && styles.buttonPressed,
          focused && styles.buttonFocused,
          style
        ]
      }}
      {...props}
    >
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  )
}
