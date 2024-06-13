import { StyleSheet, View } from 'react-native'
import RepositoryList from './components/RepositoryList'
import AppBar from './components/AppBar'
import { Navigate, Route, Routes } from 'react-router-native'
import SignIn from './components/SignIn'
import { RepositoryView } from './components/RepositoryView'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repositories/:id" element={<RepositoryView />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main
