import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PageModal, Paragraph } from '../components';
import { getUser } from '../services/firebase';

export function ItineraryPlannedScreen() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <PageModal>
      <View style={style.container}>
        <Paragraph>Coucou</Paragraph>
      </View>
    </PageModal>
  );
}

const style = StyleSheet.create({
  container: {},
});
