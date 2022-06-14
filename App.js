import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-native-paper';
import { theme } from './src/core/theme';

import {
  HomeScreen,
  LoginScreen,
  ResetPasswordScreen,
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
          <Stack.Screen name='StartScreen' component={StartScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen
            name='ResetPasswordScreen'
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
