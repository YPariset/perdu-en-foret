import {
  Background,
  ClassicButton,
  Header,
  Logo,
  Paragraph,
} from '.././components';
import { auth } from '../services/firebase';

export function HomeScreen({ navigation }) {
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('StartScreen');
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <ClassicButton mode='outlined' onPress={logout}>
        Logout
      </ClassicButton>
    </Background>
  );
}
