import { Button, StyleSheet, TextInput, View } from 'react-native'
import Text from './Text'
import theme from '../theme'
import { useFormik } from 'formik'

const styles = StyleSheet.create({
  formControl: {
    gap: 2
  },
  input: {
    borderColor: theme.colors.primaryLight,
    borderWidth: 2,
    borderRadius: 3,
    borderStyle: 'solid',
    height: 32,
    padding: 8
  },
  button: {
    backgroundColor: theme.colors.primary
  },
  form: { gap: 8, padding: 16 }
})

const WithLabel = ({ label, children }) => {
  return (
    <View style={styles.formControl}>
      <Text fontWeight="bold">{label}</Text>
      {children}
    </View>
  )
}

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit
  })

  return (
    <View role="form" style={styles.form}>
      <Text fontWeight="bold" fontSize={32}>
        Sign in
      </Text>
      <View />

      <WithLabel label="Username">
        <TextInput
          style={styles.input}
          placeholder="Your username"
          value={values.username}
          onChangeText={handleChange('username')}
        />
      </WithLabel>
      <WithLabel label="Password">
        <TextInput
          style={styles.input}
          placeholder="Your password"
          secureTextEntry
          value={values.password}
          onChangeText={handleChange('password')}
        />
      </WithLabel>
      <View />
      <Button
        color={theme.colors.primary}
        onPress={() => handleSubmit()}
        title="Sign in"
      />
    </View>
  )
}

export default SignIn
