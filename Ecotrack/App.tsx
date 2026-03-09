import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { TabNavigator } from './src/navigation/TabNavigator';
import { LoginScreen } from './src/screens/LoginScreen';

function RootNavigation() {
  const { isLoggedIn } = useAuth(); // Este valor cambia signIn/signOut

  return (
    <>
      {isLoggedIn ? (
        <TabNavigator /> 
      ) : (
        <LoginScreen /> 
      )}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}

