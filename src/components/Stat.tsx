import { StyleSheet, View } from 'react-native'
import Text from './Text'
import { formatter } from '../utils/numberFormatter'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    gap: 8
  }
})

interface StatProps {
  label: string
  value: number
}

export const Stat = ({ label, value }: StatProps) => {
  return (
    <View style={styles.container} testID={'stat-' + label}>
      <Text fontWeight="bold">{formatter(value)}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  )
}
