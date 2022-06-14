import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-native-paper';
import { theme } from './src/core/theme';

import {
  HomeScreen,
  ItineraryScreen,
  LoginScreen,
  ResetPasswordScreen,
  SettingsScreen,
  SignUpScreen,
  StartScreen,
} from './src/screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='StartScreen'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='ItineraryScreen' component={ItineraryScreen} />
          <Stack.Screen name='StartScreen' component={StartScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
          <Stack.Screen
            name='ResetPasswordScreen'
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
