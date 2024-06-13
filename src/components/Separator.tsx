import { StyleSheet, View } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  separator: {
    height: theme.spacing(1)
  }
})

type SeparatorProps = {
  h?: number
}

export const Separator = ({ h = 1 }: SeparatorProps) => (
  <View style={{ height: theme.spacing(h) }} />
)
