import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import {
  BackButton,
  Background,
  ClassicButton,
  Header,
  Logo,
  TextInput,
} from '../../components';
import { theme } from '../../core/theme';
import { createUser } from '../../services/firebase';

export function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [tel, setTel] = useState('');

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label='Email'
        returnKeyType='next'
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        keyboardType='email-address'
      />
      <TextInput
        label='Password'
        returnKeyType='done'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <ClassicButton
        mode='contained'
        onPress={() => createUser({lastName: lastName, firstName: firstName, tel: tel, email: email, password: password},  navigation)}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </ClassicButton>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
