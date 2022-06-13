import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { theme } from '../core/theme';
import { getUser, logout } from '../services/firebase'

export function settings() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.containerCenter}>
        <Text style={styles.text}>Email: {getUser()?.email}</Text>
        <Button
          style={styles.button}
          title='Logout'
          onPress={() => logout(navigation)}
          buttonStyle={{ backgroundColor: theme.colors.primary }}
        >
          Log out
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerCenter: {
    flex: 1,
    color: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  button: {
    padding: 20,
  },
});
