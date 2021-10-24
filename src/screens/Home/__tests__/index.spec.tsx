import React from 'react';
import {
  render,
  RenderAPI,
  fireEvent,
  act,
} from '@testing-library/react-native';
import HomeScreen from '..';
import * as fetchUtils from '../../../utils/fetch';

const navigationMock: any = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

const routeMock: any = {
  params: {
    showId: 1,
  },
};

const mockShowResponse = [
  {
    id: 1,
    name: 'testSuccess',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    rating: {
      average: 10,
    },
  },
  {
    id: 2,
    name: 'testSuccess2',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    rating: {
      average: 10,
    },
  },
];

jest.mock('../../../hooks/useFetch', () => ({
  useFetch: () => ({
    data: mockShowResponse,
    loading: true,
  }),
}));

const mockFetchService = () => {
  jest
    .spyOn(fetchUtils, 'fetchService')
    .mockResolvedValue([{ score: 1, show: { ...mockShowResponse[0] } }]);
};

describe('HomeScreen', () => {
  let tree: RenderAPI;
  beforeEach(() => {
    tree = render(<HomeScreen navigation={navigationMock} route={routeMock} />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const snapshot = tree.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders the loading', () => {
    expect(tree.getByTestId('HomeScreenLoading')).toBeDefined();
  });

  describe('When a show is pressed', () => {
    beforeEach(async () => {
      await fireEvent.press(tree.getByTestId('HomeScreenShowList_1'));
    });

    it('navigates to the ShowDetails screen', () => {
      expect(navigationMock.navigate).toHaveBeenCalledWith(
        'ShowDetailsScreen',
        { showId: 1 }
      );
    });
  });

  describe('When the user types on search input', () => {
    beforeEach(async () => {
      await act(async () => {
        await fireEvent.changeText(
          tree.getByTestId('HomeScreenSearchBar_searchInput'),
          'Test'
        );
      });
    });
    it('changes the input text', () => {
      const searchInputProps = tree.getByTestId(
        'HomeScreenSearchBar_searchInput_textInput'
      ).props;
      expect(searchInputProps.value).toBe('Test');
    });
  });

  describe('When search is pressed', () => {
    beforeEach(async () => {
      mockFetchService();
      await act(async () => {
        await fireEvent.press(tree.getByTestId('HomeScreenSearchBar_button'));
      });
    });
    it('searches for the show', () => {
      expect(fetchUtils.fetchService).toBeCalled();
    });

    it('shows the search results list', () => {
      expect(tree.getByTestId('HomeScreenSearchList')).toBeDefined();
    });

    describe('When a searched show is pressed', () => {
      beforeEach(async () => {
        await fireEvent.press(tree.getByTestId('HomeScreenSearchList_1'));
      });

      it('navigates to the ShowDetails screen', () => {
        expect(navigationMock.navigate).toHaveBeenCalledWith(
          'ShowDetailsScreen',
          { showId: 1 }
        );
      });
    });

    describe('When the cancel button is pressed', () => {
      it('clears the search field', async () => {
        await act(async () => {
          await fireEvent.press(tree.getByTestId('HomeScreenSearchBar_button'));
        });
        const searchInputProps = tree.getByTestId(
          'HomeScreenSearchBar_searchInput_textInput'
        ).props;
        expect(searchInputProps.value).toBe('');
      });
    });
  });
});
