import React from 'react';
import { render, RenderAPI, fireEvent } from '@testing-library/react-native';
import DetailsMainInfo from '..';

describe('DetailsMainInfo', () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(
      <DetailsMainInfo
        title='Test'
        subtitle='SubTitle Test'
        metaInfo='MetaInfo Test'
        rating={10}
        testID='testDetailsMainInfo'
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

  it('shows the title', () => {
    expect(tree.getByText('Test')).toBeDefined();
  });

  it('shows the subtitle', () => {
    expect(tree.getByText('SubTitle Test')).toBeDefined();
  });

  it('shows the metaInfo', () => {
    expect(tree.getByText('MetaInfo Test')).toBeDefined();
  });

  it('shows the rating', () => {
    expect(tree.getByText('10')).toBeDefined();
  });

  describe('When subtitle is not provided', () => {
    beforeEach(() => {
      tree = render(
        <DetailsMainInfo
          title='Test'
          metaInfo='MetaInfo Test'
          rating={10}
          testID='testDetailsMainInfo'
        />
      );
    });
    it('do not show the subtitle', () => {
      expect(tree.queryByTestId('testDetailsMainInfo_subtitle')).toBeNull();
    });
  });

  describe('When metaInfo is not provided', () => {
    beforeEach(() => {
      tree = render(
        <DetailsMainInfo
          title='Test'
          rating={10}
          testID='testDetailsMainInfo'
        />
      );
    });
    it('do not show the metaInfo', () => {
      expect(tree.queryByTestId('testDetailsMainInfo_metaInfo')).toBeNull();
    });
  });

  describe('When rating is not provided', () => {
    beforeEach(() => {
      tree = render(
        <DetailsMainInfo title='Test' testID='testDetailsMainInfo' />
      );
    });
    it('do not show the metaInfo', () => {
      expect(tree.getByTestId('testDetailsMainInfo_rating').children[0]).toBe(
        '-'
      );
    });
  });
});
