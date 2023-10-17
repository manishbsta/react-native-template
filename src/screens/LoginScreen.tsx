import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {IMAGES} from '../../assets/images/images';
import VerticalSpacer from '../core/components/VerticalSpacer';
import {AppStackParams} from '../navigation/_types';
import {useAppDispatch} from '../store/hooks';
import {setToken} from '../store/slices/auth.slice';
import {wH} from '../utils/dimensions';

type Props = NativeStackScreenProps<AppStackParams, 'Login'>;
const LoginScreen: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwdHidden, setPwdHidden] = useState(true);

  const onLoginPressed = () => {
    dispatch(setToken('temp_token'));
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled">
      <VerticalSpacer size={wH * 0.2} />
      <KeyboardAvoidingView behavior="position">
        <Image source={IMAGES.logo} style={styles.logo} />
        <VerticalSpacer size={20} />
        <Text style={styles.txtLogin}>Log in</Text>
        <VerticalSpacer />
        <View style={styles.formGroup}>
          <Text>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              ref={emailRef}
              value={email}
              onChangeText={setEmail}
              placeholder="e.g. user101"
              onSubmitEditing={() => passwordRef.current?.focus()}
              returnKeyType="next"
              style={styles.textInput}
            />
          </View>
        </View>
        <VerticalSpacer />
        <View style={styles.formGroup}>
          <Text>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              ref={passwordRef}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={pwdHidden}
              placeholder="Password"
              returnKeyType="done"
              style={styles.textInput}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      <VerticalSpacer size={20} />
      <Button title="Log in" onPress={onLoginPressed} />
    </ScrollView>
  );
};

export default LoginScreen;

const size = Dimensions.get('window').width;

const styles = StyleSheet.create({
  logo: {
    height: size * 0.3,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  contentContainer: {
    padding: 12,
  },

  txtLogin: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  formGroup: {
    rowGap: 4,
  },

  inputContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },

  textInput: {
    paddingHorizontal: 10,
  },
});
