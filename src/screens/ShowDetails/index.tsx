import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { TShowDetailsScreenProps } from './interface';
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header';
import { IEpisode, IShow } from '../../interface/shows';
import Poster from '../../components/Poster';
import Season from '../../components/Season';

const styles = StyleSheet.create({
  mainInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  body: {
    paddingHorizontal: 20,
  },
});

const ShowDetailsScreen = ({ navigation, route }: TShowDetailsScreenProps) => {
  const {
    params: { showId },
  } = route;
  const { data, loading } = useFetch<IShow>(
    `https://api.tvmaze.com/shows/${showId}?embed=episodes`
  );

  const handleShowSeasons = (episodes: IEpisode[]) => {
    const seasonNumbers = episodes.map((episode) => episode.season);
    const seasons = [...new Set(seasonNumbers)];

    const showSeasons = seasons.map((item) => ({
      season: item,
      episodes: episodes.filter((episode) => episode.season === item),
    }));

    return showSeasons;
  };

  if (data) {
    const seasons = handleShowSeasons(data._embedded.episodes);
    return (
      <View style={{ flex: 1 }}>
        <Header onBackPress={() => navigation.goBack()} />

        <FlatList
          ListHeaderComponent={
            <View>
              <View style={styles.mainInfoContainer}>
                <Poster source={data.image?.medium} size='large' />
                <Text>{data.name}</Text>
                <Text>{data.genres.map((genre) => genre)}</Text>
                <Text>{data.rating.average}</Text>
                <Text>
                  {data.schedule.time} on{' '}
                  {data.schedule.days.map((day) => `${day}`)}
                </Text>
              </View>
              <View style={styles.body}>
                <Text>{data.summary.replace(/(<([^>]+)>)/gi, '')}</Text>
              </View>
            </View>
          }
          data={seasons}
          renderItem={({ item }) => (
            <Season
              season={item}
              onEpisodePress={(episode: IEpisode) =>
                navigation.navigate('EpisodeDetailsScreen', { episode })
              }
            />
          )}
          keyExtractor={(item, index) => `${item.season}${index}`}
        />
      </View>
    );
  }
  return <View />;
};

export default ShowDetailsScreen;
