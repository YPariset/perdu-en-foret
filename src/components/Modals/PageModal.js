import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { colors, general } from '../../core/theme';
import { ClassicButton } from '../Buttons';
import { Paragraph } from '../Typography';

export function PageModal(props) {
  const { setModalVisible, modalVisible, navigation } = props;

  const openItineraryScreen = () => {
    setModalVisible(false);
    navigation.navigate('ItineraryScreen');
  };

  const ModalContainer = () => {
    return (
      <View>
        <Paragraph>Un Autre cooucou</Paragraph>
        <ClassicButton onPress={openItineraryScreen}>
          Voir l'initéraire
        </ClassicButton>
      </View>
    );
  };

  return (
    <Modal animationType='slide' transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={style.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={[style.modal]}>
        <ModalContainer />
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  container: {},
  modal: {
    position: 'absolute',
    top: '20%',
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: colors.darkGreen,
    borderTopLeftRadius: general.bigBorderRadius,
    borderTopRightRadius: general.bigBorderRadius,
  },

  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
