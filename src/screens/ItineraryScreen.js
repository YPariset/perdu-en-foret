import { StyleSheet, View } from 'react-native';
import { BackButton, Background, Paragraph } from '../components';
import { colors, general } from '../core/theme';
import { getUser } from '../services/firebase';
export function ItineraryScreen({ navigation }) {
  const user = getUser();

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
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
