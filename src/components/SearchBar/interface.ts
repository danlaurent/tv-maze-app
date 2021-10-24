export interface ISearchBar {
  search: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  buttonText: string;
  onButtonPress: () => void;
  testID?: string;
}
