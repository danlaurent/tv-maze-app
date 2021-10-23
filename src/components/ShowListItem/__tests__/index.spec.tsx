import React from 'react';
import renderer from 'react-test-renderer';
import MovieListItem from '..';

const movieMock: any = {
  name: 'Test Movie',
  rating: {
    average: 8.0,
  },
  image: {
    medium: 'https://via.placeholder.com/150',
  },
  genres: ['Test'],
};

describe('Movie', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MovieListItem movie={movieMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
