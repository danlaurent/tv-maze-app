import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { IShow } from '../../interface/shows';
import { IShowListItem } from './interface';
import Poster from '../Poster';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  rating: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 8,
  },
  poster: {
    marginRight: 12,
  },
  posterPlaceholder: {
    width: 105,
    height: 147,
    marginRight: 12,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterPlaceholderText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  genreContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: '#cecece',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 8,
  },
});

const ShowListItem = ({ show, onPress = () => {} }: IShowListItem) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row' }}
      onPress={() => onPress(show.id)}
    >
      <Poster source={show.image?.medium} size='small' style={styles.poster} />

      <View style={{ justifyContent: 'center' }}>
        <Text style={styles.title}>{show.name}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name='star' size={24} color='yellow' />
          <Text style={styles.rating}>{show.rating.average || 'N/A'}</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          {show.genres.map((genre, index) => (
            <View key={`${genre}${index}`} style={styles.genreContainer}>
              <Text>{genre}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShowListItem;
