import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { GRAY, LIGHT_GRAY } from '../../constants/styles/colors';
import { IDetailsMainInfo } from './interface';

const styles = StyleSheet.create({
  detailsName: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 16,
  },
  detailsMetaInfo: {
    color: GRAY,
    marginBottom: 8,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsRating: {
    fontSize: 16,
    color: LIGHT_GRAY,
    fontWeight: '700',
    marginLeft: 8,
  },
});

const DetailsMainInfo = ({
  title,
  subtitle,
  metaInfo,
  rating,
  align = 'center',
  testID,
}: IDetailsMainInfo) => (
  <View style={{ alignItems: align }}>
    <Text style={styles.detailsName}>{title}</Text>
    {subtitle ? (
      <Text testID={`${testID}_subtitle`} style={styles.detailsMetaInfo}>
        {subtitle}
      </Text>
    ) : null}
    {metaInfo ? (
      <Text testID={`${testID}_metaInfo`} style={styles.detailsMetaInfo}>
        {metaInfo}
      </Text>
    ) : null}
    <View style={styles.ratingContainer}>
      <FontAwesome5 name='star' size={16} color='yellow' />
      <Text testID={`${testID}_rating`} style={styles.detailsRating}>
        {rating || '-'}
      </Text>
    </View>
  </View>
);

export default DetailsMainInfo;
