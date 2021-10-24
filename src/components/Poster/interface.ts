import { StyleProp, ViewStyle } from 'react-native';

export interface IPoster {
  source?: string;
  size?: 'small' | 'large';
  style?: StyleProp<ViewStyle>;
  testID?: string;
}
