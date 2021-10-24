import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ISeason } from './interface';
import {
  DARK_QUANTUM_BLUE,
  GRAY,
  LIGHT_GRAY,
  QUANTUM_BLUE,
} from '../../constants/styles/colors';

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: DARK_QUANTUM_BLUE,
    backgroundColor: QUANTUM_BLUE,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '700',
    color: LIGHT_GRAY,
  },
  episodesContainer: {
    backgroundColor: DARK_QUANTUM_BLUE,
  },
  episode: {
    height: 48,
    paddingHorizontal: 20,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: QUANTUM_BLUE,
  },
  episodeText: {
    fontSize: 16,
    fontWeight: '700',
    color: GRAY,
  },
});

const Season = ({ season, onEpisodePress = () => {}, testID }: ISeason) => (
  <View testID={testID}>
    <View testID={`${testID}_header`} style={styles.header}>
      <Text testID={`${testID}_headerText`} style={styles.headerText}>
        Season {season.season}
      </Text>
    </View>
    <View style={styles.episodesContainer}>
      {season.episodes.map((episode) => (
        <TouchableOpacity
          testID={`${testID}_episodeButton_${episode.id}`}
          style={styles.episode}
          key={episode.id}
          onPress={() => onEpisodePress(episode)}
        >
          <Text
            testID={`${testID}_episodeText_${episode.id}`}
            style={styles.episodeText}
            numberOfLines={1}
          >
            {episode.number} - {episode.name}
          </Text>
          <FontAwesome5 name='chevron-right' size={20} color={GRAY} />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default Season;
