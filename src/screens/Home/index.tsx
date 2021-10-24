import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { TSearchedShowList, TShowList } from '../../interface/shows';
import { useFetch } from '../../hooks/useFetch';
import SearchBar from '../../components/SearchBar';
import { fetchService } from '../../utils/fetch';
import ShowList from '../../components/ShowList';
import { THomeScreenProps } from './interface';
import { handleSearchResults } from '../../utils/search';
import { APP_BACKGROUND_COLOR } from '../../constants/styles/colors';
import Loading from '../../components/Loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_BACKGROUND_COLOR,
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

  useEffect(() => {
    if (search) {
      const debounceSearch = setTimeout(() => {
        setSearching(true);
        searchShows();
      }, 1000);
      return () => clearTimeout(debounceSearch);
    } else {
      setSearchData([]);
      setSearch('');
      setSearching(false);
    }
  }, [search]);

  const onClearPress = () => {
    setSearchData([]);
    setSearch('');
    setSearching(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.header}>
          <SearchBar
            testID='HomeScreenSearchBar'
            search={search}
            onChangeText={(value: string) => setSearch(value)}
            placeholder='Show name'
            buttonText='Clear'
            onButtonPress={onClearPress}
            showButton={searching}
          />
        </View>
        {searching ? (
          <ShowList
            testID='HomeScreenSearchList'
            shows={searchData}
            onMoviePress={(showId: number) =>
              navigation.navigate('ShowDetailsScreen', { showId })
            }
          />
        ) : (
          <ShowList
            testID='HomeScreenShowList'
            shows={data}
            onMoviePress={(showId: number) =>
              navigation.navigate('ShowDetailsScreen', { showId })
            }
            onEndReached={() => {
              loadMore();
            }}
          />
        )}
        {loading ? <Loading testID='HomeScreenLoading' /> : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
