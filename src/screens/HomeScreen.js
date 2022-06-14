import { useEffect, useState } from 'react';
import {
  Background,
  ClassicButton,
  Header,
  Logo,
  Paragraph,
} from '.././components';
import { getUser, logout } from '../services/firebase';

export function HomeScreen({ navigation }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      {user ? (
        <>
          <Paragraph>{`Bonjour ${user?.lastName} vous êtes bien connecté.`}</Paragraph>
          <Paragraph>{user?.email}</Paragraph>
          <ClassicButton mode='outlined' onPress={() => logout(navigation)}>
            Logout
          </ClassicButton>
        </>
      ) : (
        <ClassicButton
          mode='contained'
          onPress={() => navigation.navigate('LoginScreen')}
        >
          Login
        </ClassicButton>
      )}
    </Background>
  );
}
