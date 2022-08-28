import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Title} from 'react-native-paper';

import VerticalSpacer from '../../../app/components/VerticalSpacer';

import {SPACINGS} from '../../../app/theme';
import {ROUTES} from '../../../app/constants/routes';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      <Title>Hi, I am Home Screen.</Title>
      <VerticalSpacer />
      <Button onPress={() => navigation.navigate(ROUTES.search_stack)}>
        Take me to Search
      </Button>
      <Button onPress={() => navigation.navigate(ROUTES.settings_stack)}>
        Take me to Settings
      </Button>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentContainer: {
    padding: SPACINGS.xs,
  },
});
