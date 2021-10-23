import { FlexAlignType } from 'react-native';

export interface IDetailsMainInfo {
  title: string;
  subtitle?: string;
  metaInfo?: string;
  rating?: number;
  align?: FlexAlignType;
}
