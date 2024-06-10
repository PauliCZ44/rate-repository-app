import { StyleSheet, TextInput, View } from 'react-native'
import Text from './Text'
import theme from '../theme'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from './Button'
import { Show } from './Show'
import { HelperFormText } from './HelperFormText'

const styles = StyleSheet.create({
  formControl: {
    gap: theme.spacing(0.25)
  },
  input: {
    borderColor: theme.colors.primaryLight,
    borderWidth: 2,
    borderRadius: theme.borderRadius,
    borderStyle: 'solid',
    height: theme.spacing(4),
    padding: theme.spacing(1)
  },
  button: {
    backgroundColor: theme.colors.primary
  },
  form: {
    gap: theme.spacing(1),
    padding: theme.spacing(2),
    maxWidth: 512,
    marginHorizontal: 'auto',
    width: '100%'
  }
})

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username is too short.')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Password is too short!')
    .required('Password is required!')
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

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: SignupSchema,
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
        <Show when={errors.username && touched.username}>
          <HelperFormText error>{errors.username}</HelperFormText>
        </Show>
      </WithLabel>
      <WithLabel label="Password">
        <TextInput
          style={styles.input}
          placeholder="Your password"
          secureTextEntry
          value={values.password}
          onChangeText={handleChange('password')}
        />
        <Show when={errors.password && touched.password}>
          <HelperFormText error>{errors.password}</HelperFormText>
        </Show>
      </WithLabel>
      <View />
      <Button onPress={() => handleSubmit()}>Sign in</Button>
    </View>
  )
}

export default SignIn
