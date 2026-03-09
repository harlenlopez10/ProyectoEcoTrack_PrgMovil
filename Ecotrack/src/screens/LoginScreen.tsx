import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { CustomInput } from '../components/CustomInputs';
import { CustomButton } from '../components/CustomButton';
import { useAuth } from '../context/AuthContext';

export const LoginScreen = () => {
  const { signIn } = useAuth();
  
  
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    //Solo deja pasar si escribe "admin"
    //----------------------------------
    if (username.toLowerCase() === 'admin') {
      signIn();
    } else {
      Alert.alert("Error", "Usuario incorrecto. Pista en el codigo jajja");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a EcoTrack</Text>
      
      <CustomInput 
        label="Usuario" 
        placeholder="Ingrese su usuario" 
        value={username} 
        onChangeText={setUsername} 
      />

      <CustomButton 
        title="Entrar" 
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 25, 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30, 
    color: '#2D6A4F' 
  }
});