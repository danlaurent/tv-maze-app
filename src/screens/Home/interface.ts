import { StackScreenProps } from '@react-navigation/stack';
import { TShowStackParamList } from '../../navigation/ShowNavigator/interface';

export type THomeScreenProps = StackScreenProps<
  TShowStackParamList,
  'HomeScreen'
>;
