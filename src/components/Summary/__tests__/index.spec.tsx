import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import Summary from '..';

describe('Summary', () => {
  let tree: RenderAPI;
  beforeEach(() => {
    tree = render(<Summary testID='testSummary' summary='A test summary' />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const snapshot = tree.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
