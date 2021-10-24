import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import Loading from '..';

describe('Loading', () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(<Loading />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const snapshot = tree.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
