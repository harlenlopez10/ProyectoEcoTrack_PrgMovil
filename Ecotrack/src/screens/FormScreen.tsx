import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Image, Text } from 'react-native';
import { CustomInput } from '../components/CustomInputs'; 

export const FormScreen = () => {
  //capturar info de user
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [activity, setActivity] = useState('');
 
  const [errors, setErrors] = useState<any>({});

  const handleSave = () => {
    let currentErrors: any = {};
    
    const emailRegex = /\S+@\S+\.\S+/;

    
    if (!emailRegex.test(email)) currentErrors.email = "Email no es válido";
    if (phone.length < 8) currentErrors.phone = "El teléfono debe tener 8 dígitos";
    
    
    if (!email || !phone || !activity) {
        Alert.alert("Campos obligatorios", "Por favor llena todos los campos");
        return;
    }

    setErrors(currentErrors);

   
    if (Object.keys(currentErrors).length === 0) {
      Alert.alert("EcoTrack", "¡Actividad registrada con éxito!");
    }
  };

  return (
    
    <View style={styles.container}>
      <Image 
        source={require('../../assets/LOGOECO.png')}
        style={styles.logo} 
      />
      
      <Text style={styles.title}>Registrar Actividad</Text>

      {/* uso de compomente reutilizable customInput  */}
      <CustomInput 
        label="Correo del usuario"
        placeholder="ejemplo@correo.com"
        value={email}
        onChangeText={setEmail}
        error={errors.email}
        keyboardType="email-address"
      />

      <CustomInput 
        label="Teléfono"
        placeholder="9999-9999"
        value={phone}
        onChangeText={setPhone}
        error={errors.phone}
        keyboardType="numeric"
      />

      <CustomInput 
        label="Actividad (Transporte, Residuos...)"
        placeholder="Ej. Use bicicleta"
        value={activity}
        onChangeText={setActivity}
      />

      <Button title="Guardar en EcoTrack" color="#2D6A4F" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, // para que ocupe toda la pantalla
    padding: 30, 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    justifyContent: 'center' 
  },

  logo: { 
    width: 80, 
    height: 80, 
    marginBottom: 20 
  },

  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#1B4332', 
    marginBottom: 20 
  }
});