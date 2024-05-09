import React, { useEffect } from 'react';
import {
  BackHandler,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mmkv } from '../../utils/mmkv';
import { useAppDispatch } from '../../store/hooks';
import { setToken } from '../../store/slices/auth.slice';
import { KEYS } from '../../core/constants/storage-keys';
import { useTheme } from '@react-navigation/native';
import { IMAGES } from '../../../assets/images';

const Splash = () => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const wHeight = useWindowDimensions().height;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);

    const loadDataFromStorage = () => {
      const token = mmkv.getString(KEYS.accessToken);
      if (token) {
        dispatch(setToken(token));
      }
    };

    loadDataFromStorage();

    return backHandler.remove;
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={'dark-content'}
      />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.logoContainer}>
          <Image
            source={IMAGES.logo}
            style={{ height: wHeight * 0.2 }}
            resizeMode='contain'
          />
          <Text>React Native Template</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 15,
  },
});
