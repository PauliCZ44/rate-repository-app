import { StyleSheet, View } from 'react-native'
import Text from './Text'

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

const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
  maximumSignificantDigits: 3
}).format

export const Stat = ({ label, value }: StatProps) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{formatter(value)}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  )
}
