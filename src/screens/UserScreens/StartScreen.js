import { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import {
  Background,
  ClassicButton,
  Header,
  Logo,
  Paragraph,
  SubmitButton,
} from '../../components';
import { auth } from '../../services/firebase';

export function StartScreen({ navigation }) {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('HomeScreen');
      }
    });
  }, []);

  return (
    <Background>
      <Logo />
      <Header>Page de connection</Header>
      <Paragraph>Connection / Inscription</Paragraph>
      <ClassicButton
        mode='contained'
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </ClassicButton>
      <ClassicButton
        mode='outlined'
        onPress={() => navigation.navigate('SignUpScreen')}
      >
        Sign Up
      </ClassicButton>
      <ClassicButton
        mode='outlined'
        onPress={() => navigation.navigate('HomeScreen')}
      >
        Continuer sans créer de compte
      </ClassicButton>
      <SubmitButton orange style={{ paddingVertical: 40 }} />
    </Background>
  );
}

const style = StyleSheet.create({});
