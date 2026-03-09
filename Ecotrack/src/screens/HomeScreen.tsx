import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export function HomeScreen({ navigation }: any) {
  const { signOut } = useAuth();
  const impacto = 50;
  const colorFondo = impacto > 70 ? '#ff4d4d' : '#2ecc71';

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dashboard EcoTrack</Text>
      
      <View style={[styles.card, { backgroundColor: colorFondo }]}>
        <Text style={styles.textoCard}>Impacto actual: {impacto}</Text>
      </View>

      <Button 
        title="Ir a registrar actividad" 
        onPress={() => navigation.navigate('Registro')} 
      />

      <View style={{ height: 20 }} />

      <Button 
        title="Cerrar Sesión" 
        onPress={signOut} 
        color='red'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 },
    
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 },

  card: { 
    padding: 40, 
    borderRadius: 20, 
    marginBottom: 20 },
    
  textoCard: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold' }
});