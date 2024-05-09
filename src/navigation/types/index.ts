import { NavigatorScreenParams } from '@react-navigation/native';

export type AppStackParams = {
  Login: undefined;
  MainStack: NavigatorScreenParams<MainStackParams>;
};

export type MainStackParams = {
  Home: undefined;
  Settings: undefined;
};
