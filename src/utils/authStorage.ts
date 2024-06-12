import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
  namespace: string
  accesToken: string | null
  constructor(namespace = 'auth') {
    this.namespace = namespace
  }

  async getAccessToken() {
    const rawtoken = await AsyncStorage.getItem(`${this.namespace}:accessToken`)
    return rawtoken ? JSON.parse(rawtoken) : null
  }

  async setAccessToken(accessToken: string) {
    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken)
    )
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`)
  }
}

export default AuthStorage
