import { registerRootComponent } from 'expo';

import App from './App';

export * from './src/screens/HomeScreen';
export * from './src/screens/FormScreen';
export * from './src/components/CustomInputs';
export * from './src/components/CustomButton';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
