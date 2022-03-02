import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Title} from 'react-native-paper';

import VerticalSpacer from '../../../components/common/VerticalSpacer';

import {SPACINGS} from '../../../core/theme';
import {ROUTES} from '../../../core/constants/routes';

const SearchScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <Title>Hi, I am Search Screen.</Title>
      <VerticalSpacer />
      <Button onPress={() => navigation.navigate(ROUTES.home_stack)}>
        Take me to Home
      </Button>
      <Button onPress={() => navigation.navigate(ROUTES.settings_stack)}>
        Take me to Settings
      </Button>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: SPACINGS.xs,
  },
});
