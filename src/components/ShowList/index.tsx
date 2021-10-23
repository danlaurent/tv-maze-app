import React from 'react';
import { FlatList, View } from 'react-native';
import { ISearchedShow, IShow } from '../../interface/shows';
import ShowListItem from '../ShowListItem';
import { IShowList } from './interface';

const ShowList = ({ shows, onEndReached, onMoviePress }: IShowList) => {
  if (shows && shows.length > 0) {
    return (
      <FlatList
        data={shows}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingVertical: 8 }}>
              <ShowListItem show={item} onPress={onMoviePress} />
            </View>
          );
        }}
        onEndReachedThreshold={0.9}
        onEndReached={onEndReached}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 20 }}
      />
    );
  }
  return null;
};

export default ShowList;
