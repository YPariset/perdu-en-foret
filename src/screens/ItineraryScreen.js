import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BackButton, Background, OptionButton, Paragraph } from '../components';
import { colors, general } from '../core/theme';
import { getUser } from '../services/firebase';
import MapView from 'react-native-maps';

export function ItineraryScreen({ navigation }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <OptionButton navigation={navigation} />
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Paragraph>Voici l'itineraire</Paragraph>
      <View style={style.modalClose}>
        <Paragraph>Coucou</Paragraph>
      </View>
    </Background>
  );
}

const style = StyleSheet.create({
  modalClose: {
    position: 'absolute',
    bottom: 0,
    height: '20%',
    backgroundColor: colors.darkGreen,
    borderTopLeftRadius: general.bigBorderRadius,
    borderTopRightRadius: general.bigBorderRadius,
    width: '100%',
  },
});
