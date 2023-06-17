import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onInputChange
}) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
    onInputChange(inputType, text);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={inputType === 'password'}
          onChangeText={(text) => handleInputChange(text)} value={inputValue} />
      ) : inputType == 'Email ID' ? (
        <TextInput onChangeText={(text) => handleInputChange(text)} value={inputValue} />
      
      ) : inputType == 'Confirm Password' ? (
        <TextInput onChangeText={(text) => handleInputChange(text)} value={inputValue} />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
          onChangeText={(text) => handleInputChange(text)} value={inputValue} 
        />
      )}
      
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}