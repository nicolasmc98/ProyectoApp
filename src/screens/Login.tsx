import React, { useState } from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';

import LoginSVG from '../images/login.svg';
import GoogleSVG from '../images/google.svg';
import FacebookSVG from '../images/facebook.svg';
import TwitterSVG from '../images/twitter.svg';

import CustomButton from '../components/CustomButtom';
import InputField from '../components/InputField';
import { StackScreenProps } from '@react-navigation/stack';


import { getAuth,signInWithEmailAndPassword  } from "firebase/auth";



interface Props extends StackScreenProps<any,any>{};

export const Login = ({navigation}: Props) => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (inputType, text) => {
    if (inputType === 'Email ID') {
      setEmail(text);
    } else if (inputType === 'password') {
      setPassword(text);
      
    }  
  };

  const handleLogin = () => {
    if (email === '') {
      Alert.alert('Error', 'Please enter your email.');
    } 
    if (password === '') {
      Alert.alert('Error', 'Please enter your password.');
    } else {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoading(false);
          navigation.navigate("MyTabs");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(error.message);
          setLoading(false);
          // ..
        });
    }

    // Realizar lógica de inicio de sesión con los valores de email y password
  };
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="Email ID"
          keyboardType="email-address"
          onInputChange={handleInputChange}
            
        />

        <InputField 
          label={'password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}  
          />
          }
          inputType="password"
          onInputChange={handleInputChange}
        />
        
        <CustomButton label={"Login"} onPress={handleLogin}  />

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;