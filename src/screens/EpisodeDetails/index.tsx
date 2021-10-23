import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import Header from '../../components/Header';
import { TEpisodeDetailsScreenProps } from './interface';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  mainInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  body: {
    padding: 20,
  },
  episodeName: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  episodeDetails: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

const EpisodeDetailsScreen = ({
  navigation,
  route,
}: TEpisodeDetailsScreenProps) => {
  const {
    params: { episode },
  } = route;
  return (
    <View style={{ flex: 1 }}>
      <Header onBackPress={() => navigation.goBack()} />
      <View style={styles.mainInfoContainer}>
        <Image
          source={{ uri: episode.image?.original }}
          style={{ width: screen.width, aspectRatio: 3 / 2 }}
        />
        <View style={styles.body}>
          <Text style={styles.episodeName}>{episode.name}</Text>
          <Text style={styles.episodeDetails}>
            Season {episode.season} | Episode {episode.number}
          </Text>
          <Text style={styles.episodeDetails}>{episode.rating.average}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.episodeDetails}>{episode.summary}</Text>
      </View>
    </View>
  );
};

export default EpisodeDetailsScreen;
