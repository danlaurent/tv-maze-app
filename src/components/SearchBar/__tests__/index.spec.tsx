import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import SearchBar from '..';

const onChangeTextMock = jest.fn();
const onButtonPressMock = jest.fn();

describe('SearchBar', () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(
      <SearchBar
        search='Test Search'
        onChangeText={() => onChangeTextMock()}
        placeholder='Test Placeholder'
        onButtonPress={() => onButtonPressMock()}
        buttonText='Search'
        testID='testSearchBar'
        showButton
      />
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const snapshot = tree.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  describe('When the user types in the search bar', () => {
    beforeEach(async () => {
      await fireEvent.changeText(tree.getByTestId('testSearchBar_searchInput'));
    });

    it('fires onChangeText', () => {
      expect(onChangeTextMock).toBeCalled();
    });
  });

  describe('When the button is pressed', () => {
    beforeEach(async () => {
      await fireEvent.press(tree.getByTestId('testSearchBar_button'));
    });

    it('fires onButtonPress', () => {
      expect(onButtonPressMock).toBeCalled();
    });
  });
});
