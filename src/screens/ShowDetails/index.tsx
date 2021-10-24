import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { TShowDetailsScreenProps } from './interface';
import { useFetch } from '../../hooks/useFetch';
import Header from '../../components/Header';
import { IEpisode, ISchedule, IShow } from '../../interface/shows';
import Poster from '../../components/Poster';
import Season from '../../components/Season';
import {
  handleSchedule,
  handleShowSeasons,
  humanizeMetaInfo,
} from '../../utils/transform';
import Summary from '../../components/Summary';
import DetailsMainInfo from '../../components/DetailsMainInfo';
import Loading from '../../components/Loading';
import { APP_BACKGROUND_COLOR } from '../../constants/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_BACKGROUND_COLOR,
  },
  mainInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  body: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  listHeader: {
    paddingTop: 20,
  },
});

const ShowDetailsScreen = ({ navigation, route }: TShowDetailsScreenProps) => {
  const {
    params: { showId },
  } = route;
  const { data, loading } = useFetch<IShow>(
    `https://api.tvmaze.com/shows/${showId}?embed=episodes`
  );
  const seasons = data ? handleShowSeasons(data._embedded.episodes) : null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header
          testID='ShowDetailsHeader'
          onBackPress={() => navigation.goBack()}
        />
        {data ? (
          <FlatList
            ListHeaderComponent={
              <View style={styles.listHeader}>
                <View style={styles.mainInfoContainer}>
                  <Poster source={data.image?.medium} size='large' />
                  <DetailsMainInfo
                    title={data.name}
                    subtitle={humanizeMetaInfo(data.genres)}
                    metaInfo={handleSchedule(data.schedule)}
                    rating={data.rating?.average}
                  />
                </View>
                <View style={styles.body}>
                  <Summary summary={data.summary} />
                </View>
              </View>
            }
            data={seasons}
            renderItem={({ item }) => (
              <Season
                testID={`ShowDetails_season${item.season}`}
                season={item}
                onEpisodePress={(episode: IEpisode) =>
                  navigation.navigate('EpisodeDetailsScreen', { episode })
                }
              />
            )}
            keyExtractor={(item, index) => `${item.season}${index}`}
          />
        ) : null}
        {loading ? <Loading testID='ShowDetailsLoading' /> : null}
      </View>
    </SafeAreaView>
  );
};

export default ShowDetailsScreen;
