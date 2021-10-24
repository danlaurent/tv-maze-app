import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import Button from '..';

const onPressMock = jest.fn();

describe('Button', () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(
      <Button text='Test' onPress={() => onPressMock()} testID='testButton' />
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const snapshot = tree.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  describe('When the button is pressed', () => {
    beforeEach(async () => {
      await fireEvent.press(tree.getByTestId('testButton'));
    });

    it('fires the onPress action', () => {
      expect(onPressMock).toBeCalledTimes(1);
    });
  });
});
