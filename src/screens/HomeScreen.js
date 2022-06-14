import {
  Background,
  ClassicButton,
  Header,
  Logo,
  Paragraph,
} from '.././components';
import { getUser, logout } from '../services/firebase';
import { ItineraryPlannedModal } from './ItineraryPlannedModal';

export function HomeScreen({ navigation }) {
  const user = getUser();

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
      <ItineraryPlannedModal navigation={navigation} />
    </Background>
  );
}
