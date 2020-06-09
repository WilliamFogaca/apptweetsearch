import React, { useState } from 'react';
import { View, Text, Image, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';

/* Styles */
import styles from './styles';

/* PNGs */
import profileImg from '../../assets/profile.jpg';

import { MainFeedQuery } from '../../GraphQL/queries/MainFeedQuery';

export default function MainFeed() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const { loading, error, data } = useQuery(MainFeedQuery);

  if(!loading) {
    console.log('Data: ', data);
    if (error) {
      console.log('ERROR: ', error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1DA1F2" />
      <View style={styles.headerSearch}>
        <Text style={styles.headerText}>Procurar Tweets</Text>
        <SearchBar
          containerStyle={styles.headerSearchContainer}
          inputContainerStyle={styles.headerSearchInput}
          onChangeText={text => setSearchText(text)}
          placeholder="Pesquise aqui"
          value={searchText}
        />
      </View>
      <FlatList
        style={styles.feedList}
        data={[1, 2, 3]}
        keyExtractor={feedItem => String(feedItem) }
        renderItem={() => (
          <TouchableOpacity
            onPress={() => navigation.navigate('UserFeed')}
          >
            <View style={styles.feedItem} >
              <Image source={profileImg} style={styles.feedItemImg} />
              <View style={styles.feedItemContent}>
                <Text style={styles.feedItemName}>Martin Palmer</Text>
                <Text style={styles.feedItemDate}>08/06/2020, 15:24</Text>
                <Text style={styles.feedItemText}>What is the loop of Creation? How is there something from nothing? In spite of the fact that it is impossible to prove that anythin….</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}