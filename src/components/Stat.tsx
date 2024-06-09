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

export const Stat = ({ label, value }: StatProps) => {
  const formatted = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
    maximumSignificantDigits: 3
  }).format(value)
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{formatted}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  )
}
