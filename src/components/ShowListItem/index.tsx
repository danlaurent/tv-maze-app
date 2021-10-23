import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { IShow } from '../../interface/shows';
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

const ShowListItem = ({ show, onPress = () => {} }: IShowListItem) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(show.id)}>
      <Poster source={show.image?.medium} size='small' style={styles.poster} />
      <DetailsMainInfo
        title={show.name}
        subtitle={humanizeMetaInfo(show.genres)}
        rating={show.rating.average}
        align='flex-start'
      />
    </TouchableOpacity>
  );
};

export default ShowListItem;
