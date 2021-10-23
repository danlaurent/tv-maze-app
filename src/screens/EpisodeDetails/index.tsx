import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import DetailsMainInfo from '../../components/DetailsMainInfo';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
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
      <ScrollView>
        <View style={styles.mainInfoContainer}>
          <Image
            source={{ uri: episode.image?.original }}
            style={{ width: screen.width, aspectRatio: 3 / 2 }}
          />
          <View style={styles.body}>
            <DetailsMainInfo
              title={episode.name}
              subtitle={`Season ${episode.season} | Episode ${episode.number}`}
              rating={episode.rating.average}
            />
          </View>
        </View>
        <View style={styles.body}>
          <Summary summary={episode.summary} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EpisodeDetailsScreen;
