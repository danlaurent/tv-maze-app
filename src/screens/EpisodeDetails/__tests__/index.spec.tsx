import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import EpisodeDetailsScreen from '..';

const navigationMock: any = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

const routeMock: any = {
  params: {
    episode: {
      name: 'test',
      season: 1,
      number: 1,
      rating: {
        average: 10,
      },
      summary: 'A test episode',
    },
  },
};

describe('EpisodeDetailsScreen', () => {
  let tree: RenderAPI;
  beforeEach(() => {
    tree = render(
      <EpisodeDetailsScreen navigation={navigationMock} route={routeMock} />
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const snapshot = tree.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  describe('When the back button is pressed', () => {
    beforeEach(async () => {
      await fireEvent.press(
        tree.getByTestId('EpisodeDetailsHeader_backButton')
      );
    });
    it('fires goBack action', () => {
      expect(navigationMock.goBack).toBeCalledTimes(1);
    });
  });
});
