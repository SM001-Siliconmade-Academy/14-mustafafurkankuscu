import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/routers/Router';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';




export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}


