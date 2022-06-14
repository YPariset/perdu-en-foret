import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Background,
  Header,
  Logo,
  OptionButton,
  Paragraph,
} from '.././components';
import { getUser } from '../services/firebase';
import { ItineraryPlannedModal } from './ItineraryPlannedModal';

export function HomeScreen({ navigation }) {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <Background>
      <OptionButton navigation={navigation} />
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
        </>
      ) : (
        <></>
      )}
      <ItineraryPlannedModal navigation={navigation} />
    </Background>
  );
}

const style = StyleSheet.create({});
