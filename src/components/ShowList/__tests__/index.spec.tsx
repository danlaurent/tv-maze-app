import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import ShowList from '..';

const showsMock: any = [
  {
    id: 1,
    name: 'Test Movie',
    rating: {
      average: 8.0,
    },
    image: {
      medium: 'https://via.placeholder.com/150',
    },
    genres: ['Test'],
  },
];

const emptyShowsMock: any = [];

describe('ShowList', () => {
  let tree: RenderAPI;
  beforeEach(() => {
    tree = render(<ShowList shows={showsMock} />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const snapshot = tree.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  describe('When there is no shows', () => {
    beforeEach(() => {
      tree = render(<ShowList testID='testShowList' shows={emptyShowsMock} />);
    });

    it('do not render the show list', () => {
      expect(tree.queryByTestId('testShowList')).toBeNull();
    });
  });
});
