import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ShowListItem from '../ShowListItem';
import { IShowList } from './interface';

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 8,
  },
});

const ShowList = ({ shows, onEndReached, onMoviePress, testID }: IShowList) => {
  if (shows && shows.length > 0) {
    return (
      <FlatList
        testID={testID}
        data={shows}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <ShowListItem
                show={item}
                onPress={onMoviePress}
                testID={`${testID}_${item.id}`}
              />
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
