import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { MainStackParams } from '../../navigation/types';
import { logOut } from '../../store/slices/auth.slice';

type HomeScreenProps = NativeStackScreenProps<MainStackParams, 'Home'>;
const Home = ({ navigation }: HomeScreenProps) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='Settings'
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title='Log out'
        onPress={() => dispatch(logOut())}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
  },
});
