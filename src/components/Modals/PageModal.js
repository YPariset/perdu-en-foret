import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { colors, general } from '../../core/theme';

export function PageModal(props) {
  const { children, setModalVisible, modalVisible } = props;

  return (
    <Modal animationType='slide' transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={style.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={[style.container]}>{children}</View>
    </Modal>
  );
}

const style = StyleSheet.create({
  container: {
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
