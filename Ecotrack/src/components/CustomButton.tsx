import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export const CustomButton = ({ title, onPress }: Props) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { 
    backgroundColor: '#007820', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center' },

  text: { 
    color: 'white', 
    fontWeight: 'bold' }
});