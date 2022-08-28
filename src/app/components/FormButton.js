import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import {SPACINGS} from '../../app/theme';

const FormButton = ({label, isLoading, icon, onPress, ...rest}) => {
  return (
    <Button
      icon={icon}
      mode="contained"
      onPress={onPress}
      loading={isLoading}
      contentStyle={styles.content}
      {...rest}>
      {label}
    </Button>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  content: {
    paddingVertical: SPACINGS.xs,
  },
});
