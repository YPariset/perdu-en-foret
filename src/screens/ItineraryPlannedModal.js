import { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ClassicButton, Paragraph } from '../components';
import { colors, general } from '../core/theme';
import { getUser } from '../services/firebase';

export function ItineraryPlannedModal({ navigation }) {
  const user = getUser();
  const [modalVisible, setModalVisible] = useState(false);

  const openItineraryScreen = () => {
    setModalVisible(false);
    navigation.navigate('ItineraryScreen');
  };

  const ModalOpenContainer = () => (
    <View style={[style.modalOpenContainer]}>
      <Paragraph>Un Autre cooucou</Paragraph>
      <ClassicButton onPress={openItineraryScreen}>
        Voir l'initéraire
      </ClassicButton>
    </View>
  );

  const ModalCloseContainer = () => (
    <View style={[style.modalColseContainer]}>
      <Paragraph>Coucou</Paragraph>
    </View>
  );

  return (
    <>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={style.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={[style.modalOpenBackground]}>
          <ModalOpenContainer />
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={[style.modalCloseBackground]}
      >
        <ModalCloseContainer />
      </Pressable>
    </>
  );
}

const style = StyleSheet.create({
  modalOpenContainer: {},
  modalColseContainer: {},
  modalOpenBackground: {
    position: 'absolute',
    top: '20%',
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: colors.darkGreen,
    borderTopLeftRadius: general.bigBorderRadius,
    borderTopRightRadius: general.bigBorderRadius,
  },
  modalCloseBackground: {
    position: 'absolute',
    bottom: 0,
    height: '20%',
    backgroundColor: colors.darkGreen,
    borderTopLeftRadius: general.bigBorderRadius,
    borderTopRightRadius: general.bigBorderRadius,
    width: '100%',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
