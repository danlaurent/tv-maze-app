import React from 'react';
import renderer from 'react-test-renderer';
import MovieListItem from '..';

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

describe('ShowListitem', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MovieListItem show={showMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
