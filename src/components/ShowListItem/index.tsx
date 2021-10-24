import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { IShowListItem } from './interface';
import Poster from '../Poster';
import DetailsMainInfo from '../DetailsMainInfo';
import { humanizeMetaInfo } from '../../utils/transform';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  poster: {
    marginRight: 12,
  },
});

const ShowListItem = ({ show, onPress = () => {}, testID }: IShowListItem) => {
  return (
    <TouchableOpacity
      testID={testID}
      style={styles.container}
      onPress={() => onPress(show.id)}
    >
      <Poster source={show.image?.medium} size='small' style={styles.poster} />
      <DetailsMainInfo
        testID={`${testID}_detailsMainInfo`}
        title={show.name}
        subtitle={humanizeMetaInfo(show.genres)}
        rating={show.rating.average}
        align='flex-start'
      />
    </TouchableOpacity>
  );
};

export default ShowListItem;
