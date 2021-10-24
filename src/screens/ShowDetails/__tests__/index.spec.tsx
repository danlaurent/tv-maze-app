import React from 'react';
import {
  render,
  RenderAPI,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import ShowDetailsScreen from '..';

const navigationMock: any = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

const routeMock: any = {
  params: {
    showId: 1,
  },
};

const mockShowResponse = {
  id: 1,
  name: 'testSuccess',
  genres: ['Drama', 'Science-Fiction', 'Thriller'],
  _embedded: {
    episodes: [
      {
        id: 1,
        season: 1,
        name: 'testSeason',
      },
    ],
  },
};

jest.mock('../../../hooks/useFetch', () => ({
  useFetch: () => ({
    data: mockShowResponse,
    loading: true,
  }),
}));

describe('ShowDetailsScreen', () => {
  let tree: RenderAPI;
  beforeEach(() => {
    tree = render(
      <ShowDetailsScreen navigation={navigationMock} route={routeMock} />
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const snapshot = tree.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders the season', () => {
    expect(tree.getByTestId('ShowDetails_season1')).toBeDefined();
  });

  it('renders the loading', () => {
    expect(tree.getByTestId('ShowDetailsLoading')).toBeDefined();
  });

  describe('When the back button is pressed', () => {
    beforeEach(async () => {
      await fireEvent.press(tree.getByTestId('ShowDetailsHeader_backButton'));
    });
    it('fires goBack action', () => {
      expect(navigationMock.goBack).toBeCalledTimes(1);
    });
  });

  describe('When an episode is pressed', () => {
    beforeEach(async () => {
      await fireEvent.press(
        tree.getByTestId('ShowDetails_season1_episodeButton_1')
      );
    });
    it('navigates to the EpisodeDetails screen', () => {
      expect(navigationMock.navigate).toHaveBeenCalledWith(
        'EpisodeDetailsScreen',
        { episode: { id: 1, name: 'testSeason', season: 1 } }
      );
    });
  });
});
