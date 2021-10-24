import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import Season from '..';

const onEpisodePressMock = jest.fn();

const seasonMock = {
  season: 1,
  episodes: [
    {
      id: '1',
      name: 'Test Episode',
      number: 1,
      season: 1,
      image: {
        medium: '',
        original: '',
      },
      summary: 'A test episode',
      rating: {
        average: 10,
      },
    },
  ],
};

const emptySeasonMock = {
  season: 2,
  episodes: [],
};

describe('Season', () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(
      <Season
        testID='testSeason'
        season={seasonMock}
        onEpisodePress={() => onEpisodePressMock()}
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

  it('shows the Season on header', () => {
    expect(tree.getByText('Season 1')).toBeDefined();
  });

  it('shows the episode number and name', () => {
    expect(tree.getByText('1 - Test Episode')).toBeDefined();
  });

  describe('When the episode is pressed', () => {
    beforeEach(async () => {
      await fireEvent.press(tree.getByTestId('testSeason_episodeButton_1'));
    });

    it('fires onEpisodePress', () => {
      expect(onEpisodePressMock).toBeCalled();
    });
  });

  describe('If there is no episodes', () => {
    beforeEach(() => {
      tree = render(<Season testID='testSeason' season={emptySeasonMock} />);
    });

    it('do not show the episode button', () => {
      expect(tree.queryByTestId('testSeason_episodeButton_1')).toBeNull();
    });

    it('do not show the episode name and number', () => {
      expect(tree.queryByTestId('testSeason_episodeText_1')).toBeNull();
    });
  });
});
