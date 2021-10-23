import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ISeason } from './interface';

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '700',
  },
  episode: {
    height: 48,
    paddingHorizontal: 20,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  episodeText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

const Season = ({ season, onEpisodePress = () => {} }: ISeason) => (
  <View>
    <View style={styles.header}>
      <Text style={styles.headerText}>Season {season.season}</Text>
    </View>

    {season.episodes.map((episode) => (
      <TouchableOpacity
        style={styles.episode}
        key={episode.id}
        onPress={() => onEpisodePress(episode)}
      >
        <Text style={styles.episodeText} numberOfLines={1}>
          {episode.number} - {episode.name}
        </Text>
        <FontAwesome5 name='chevron-right' size={20} color='black' />
      </TouchableOpacity>
    ))}
  </View>
);

export default Season;
