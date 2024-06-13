import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { SignInContainer } from '../components/SignIn'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn()

      // Render the SignInContainer component
      const { getByTestId, getByLabelText } = render(
        <SignInContainer onSubmit={onSubmit} />
      )

      // Fill the text inputs
      fireEvent.changeText(getByLabelText('username'), 'testuser')
      fireEvent.changeText(getByLabelText('password'), 'testpassword')

      // Press the submit button
      fireEvent.press(getByTestId('submitButton'))

      // Wait for the onSubmit function to be called
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'testuser',
          password: 'testpassword'
        })
      })
    })
  })
})
