import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {logOut} from '../store/slices/auth.slice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Log out" onPress={() => dispatch(logOut())} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
