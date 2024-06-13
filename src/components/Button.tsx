import { Pressable, PressableProps, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    paddingHorizontal: theme.spacing(1.5),
    paddingVertical: theme.spacing(1),
    borderWidth: 1,
    borderColor: 'transparent'
  },
  buttonBig: {
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(1.5),
    borderRadius: 4
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
  isBig,
  ...props
}: PressableProps & { children: string; isBig?: boolean }) => {
  return (
    <Pressable
      //@ts-ignore
      style={({ pressed, focused }) => {
        return [
          styles.button,
          isBig && styles.buttonBig,
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
