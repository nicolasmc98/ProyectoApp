import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { firebaseConfig } from './firebase-config';
import {useEffect} from 'react';
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import AuthStack from './src/navigator/AuthStack';
import {Provider} from 'react-redux';
import { store } from './src/components/Store'




export const App = () => {
  
  useEffect(() => {
    if (!firebase.apps.length) {
      const app = firebase.initializeApp(firebaseConfig);
      const auth = getAuth(app); 
  }},[])
  
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AuthStack/>
    
    </NavigationContainer>
    </Provider>
  )
}
export default App;

