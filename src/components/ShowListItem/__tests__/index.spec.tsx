import React from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import ShowListItem from '..';

const showMock: any = {
  name: 'Test Movie',
  rating: {
    average: 8.0,
  },
  image: {
    medium: 'https://via.placeholder.com/150',
  },
  genres: ['Test'],
};

const onPressMock = jest.fn();

describe('ShowListitem', () => {
  let tree: RenderAPI;
  beforeEach(() => {
    tree = render(
      <ShowListItem
        testID='testShowListItem'
        show={showMock}
        onPress={() => onPressMock()}
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

  describe('When the ShowListItem is pressed', () => {
    beforeEach(async () => {
      await fireEvent.press(tree.getByTestId('testShowListItem'));
    });

    it('fires the onPress action', () => {
      expect(onPressMock).toBeCalledTimes(1);
    });
  });
});
