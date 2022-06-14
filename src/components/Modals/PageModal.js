import { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Paragraph } from '../';
import { colors, general } from '../../core/theme';

export function PageModal(props) {
  const { children } = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={style.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={[style.container]}>{children}</View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={[style.modalClose]}
      >
        <Paragraph>{children}</Paragraph>
      </Pressable>
    </>
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
  modalClose: {
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
