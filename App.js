import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { theme } from './src/core/theme';

import { Paragraph } from './src/components';
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
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsSplashScreenVisible(false), 2000);
  }, []);
  return (
    <Provider theme={theme}>
      {isSplashScreenVisible ? (
        <View style={style.splashScreenContainer}>
          <Paragraph>Ceci est le splashScreen</Paragraph>
        </View>
      ) : (
        <></>
      )}

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

const style = StyleSheet.create({
  splashScreenContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 100000,
  },
});
