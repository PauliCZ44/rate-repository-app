import { useContext } from 'react'
import AuthStorageContext from '../contexts/AuthStorageContext'
import AuthStorage from '../utils/authStorage'

const useAuthStorage = (): AuthStorage => {
  const res = useContext(AuthStorageContext)
  if (!res) {
    throw new Error('AuthStorageContext not found')
  }
  return res
}

export default useAuthStorage
