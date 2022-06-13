import {
  Background,
  ClassicButton,
  Header,
  Logo,
  Paragraph,
} from '.././components';
import { logout } from '../services/firebase';

export function HomeScreen({ navigation }) {

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <ClassicButton mode='outlined' onPress={()=>logout(navigation)}>
        Logout
      </ClassicButton>
    </Background>
  );
}
