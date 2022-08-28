import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Title} from 'react-native-paper';

import VerticalSpacer from '../../../app/components/VerticalSpacer';

import {SPACINGS} from '../../../app/theme';
import {ROUTES} from '../../../app/constants/routes';

const SettingsScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <Title>Hi, I am Settings Screen.</Title>
      <VerticalSpacer />
      <Button onPress={() => navigation.navigate(ROUTES.home_stack)}>
        Take me to Home
      </Button>
      <Button onPress={() => navigation.navigate(ROUTES.search_stack)}>
        Take me to Search
      </Button>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: SPACINGS.xs,
  },
});
