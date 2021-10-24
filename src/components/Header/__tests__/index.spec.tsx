import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import Header from '..';

const onPressMock = jest.fn();

describe('Header', () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(
      <Header onBackPress={() => onPressMock()} testID='testHeader' />
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const snapshot = tree.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  describe('When the back is pressed', () => {
    beforeEach(async () => {
      await fireEvent.press(tree.getByTestId('testHeader_backButton'));
    });

    it('fires the onBackPress action', () => {
      expect(onPressMock).toBeCalledTimes(1);
    });
  });
});
