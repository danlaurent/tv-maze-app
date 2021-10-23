import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { TSearchedShowList, TShowList } from '../../interface/shows';
import useFetch from '../../hooks/useFetch';
import SearchBar from '../../components/SearchBar';
import { fetchService } from '../../utils/fetch';
import ShowList from '../../components/ShowList';
import { THomeScreenProps } from './interface';
import { handleSearchResults } from '../../utils/search';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: StatusBar.currentHeight,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});

const HomeScreen = ({ navigation }: THomeScreenProps) => {
  const [search, setSearch] = useState<string>('');
  const { data, loading, loadMore } = useFetch<TShowList>(
    'https://api.tvmaze.com/shows',
    { paginate: true }
  );
  const [searchData, setSearchData] = useState<TShowList | null>(null);
  const [searching, setSearching] = useState(false);

  const searchShows = async () => {
    const searchResults: TSearchedShowList = await fetchService(
      `https://api.tvmaze.com/search/shows?q=${search}`
    );
    const shows = handleSearchResults(searchResults);
    setSearchData(shows);
  };

  const onSearchPress = () => {
    if (searching) {
      setSearchData([]);
    } else {
      searchShows();
    }
    setSearching(!searching);
  };

  const buttonText = searching ? 'Cancel' : 'Search';

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.header}>
          <SearchBar
            search={search}
            onChangeText={(value: string) => setSearch(value)}
            placeholder='Search'
            buttonText={buttonText}
            onButtonPress={onSearchPress}
          />
        </View>
        {searching ? (
          <ShowList
            shows={searchData}
            onMoviePress={(showId: number) =>
              navigation.navigate('ShowDetailsScreen', { showId })
            }
          />
        ) : (
          <ShowList
            shows={data}
            onMoviePress={(showId: number) =>
              navigation.navigate('ShowDetailsScreen', { showId })
            }
            onEndReached={() => {
              loadMore();
            }}
          />
        )}

        {loading ? <Text>Loading...</Text> : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
