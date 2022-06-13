import {
  Background,
  ClassicButton,
  Header,
  Logo,
  Paragraph,
} from '../../components';

export function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Page principale</Header>
      <Paragraph>On peut mettre la map ici.</Paragraph>
      <ClassicButton
        mode='contained'
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </ClassicButton>
      <ClassicButton
        mode='outlined'
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </ClassicButton>
    </Background>
  );
}
