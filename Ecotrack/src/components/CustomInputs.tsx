import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export const CustomInput = ({ label, value, onChangeText, placeholder, error, keyboardType, secureTextEntry }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error ? styles.borderError : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    width: '100%', 
    marginBottom: 15 
  },
    
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 5, 
    color: '#2d6a44' 
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
  },
  borderError: { 
    borderColor: '#E63946' 
  },

  errorText: { 
    color: '#E63946', 
    fontSize: 12, 
    marginTop: 5 
  }
});