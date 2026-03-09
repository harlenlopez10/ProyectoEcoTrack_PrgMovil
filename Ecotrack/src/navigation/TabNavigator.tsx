import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { FormScreen } from '../screens/FormScreen';
import { LoginScreen } from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Registro" component={FormScreen} />
      {/* ¡Borra la línea del LoginScreen de aquí! */}
    </Tab.Navigator>
  );
}