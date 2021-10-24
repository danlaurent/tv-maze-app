import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import SearchInput from '..';

const onChangeTextMock = jest.fn();

describe('SearchInput', () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(
      <SearchInput
        value='Test Text'
        onChangeText={() => onChangeTextMock()}
        placeholder='Test Placeholder'
        testID='testSearchInput'
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

  describe('When the user types in the search input', () => {
    beforeEach(async () => {
      await fireEvent.changeText(tree.getByTestId('testSearchInput_textInput'));
    });

    it('fires onChangeText', () => {
      expect(onChangeTextMock).toBeCalled();
    });
  });
});
