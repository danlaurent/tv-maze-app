import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import Poster from '..';

describe('Poster', () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(
      <Poster source='https://via.placeholder.com/300' testID='testPoster' />
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const snapshot = tree.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  describe('When source is not provided', () => {
    beforeEach(() => {
      tree = render(<Poster />);
    });
    it('shows an image placeholder', () => {
      expect(tree.queryByTestId('testPoster_imagePlaceholder')).toBeNull();
    });
  });
});
