import { useEffect, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { PageModal, Paragraph } from '../components';
import { colors, general } from '../core/theme';
import { getUser } from '../services/firebase';

export function ItineraryPlannedModal({ navigation }) {
  const [user, setUser] = useState(undefined);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <>
      <PageModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
      <Pressable
        onPress={() => setModalVisible(true)}
        style={[style.modalClose]}
      >
        <Paragraph>Coucou</Paragraph>
      </Pressable>
    </>
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
