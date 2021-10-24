import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { GRAY } from '../../constants/styles/colors';
import { cleanSummary } from '../../utils/transform';
import { ISummary } from './interface';

const styles = StyleSheet.create({
  summary: {
    textAlign: 'center',
    color: GRAY,
  },
});

const Summary = ({ summary = '', testID }: ISummary) => (
  <Text testID={testID} style={styles.summary}>
    {cleanSummary(summary)}
  </Text>
);

export default Summary;
