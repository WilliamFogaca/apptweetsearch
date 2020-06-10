import React, { useState, useEffect } from 'react';
import { View, Text, Image, StatusBar, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';

/* Styles */
import styles from './styles';

/* Components */
import Loading from '../components/Loading';

/* helpers */
import { formatDate } from '../../helpers';

/* Queries */
import { MainSearchQuery } from '../../GraphQL/queries/MainSearchQuery';

export default function MainFeed() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [limit, setLimit] = useState(10);

  const { loading, data, fetchMore } = useQuery(MainSearchQuery, {
    variables: { qText: searchText !== '' ? searchText : 'Javascript', count: limit }
  });

  //if (error) console.log('ERROR: ', error);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1DA1F2" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Procurar Tweets</Text>
        <SearchBar
          containerStyle={styles.headerSearchContainer}
          inputContainerStyle={styles.headerSearchInput}
          onChangeText={text => setSearchText(text)}
          placeholder="Pesquise aqui"
          value={searchText}
        />
      </View>

      { searchText !== '' ?
        !loading ? 
        data.twitter.search.length > 0 ?
      <FlatList
        style={styles.feedList}
        contentContainerStyle={{paddingBottom: 21}}
        data={data.twitter.search}
        onEndReached={() => fetchMore({
            variables: {
              count: limit + 10
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              console.log(previousResult);
              console.log(fetchMoreResult);
              if (!fetchMoreResult || fetchMoreResult.twitter.search.length === 0) {
                return previousResult;
              }
              return {
                data: fetchMoreResult
              };
            }
        })}
        onEndReachedThreshold={0.4}
        keyExtractor={(tweet) => String(tweet.id) }
        renderItem={ ({ item: tweet }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('UserFeed', { userInfos: tweet.user })}
            activeOpacity={0.8}
          >
            <View style={styles.feedItem} >
              <Image
                style={styles.feedItemImg} 
                source={{uri: tweet.user.profile_image_url}}
              />
              <View style={styles.feedItemContent}>
                <Text style={styles.feedItemName}>{tweet.user.name}</Text>
                <Text style={styles.feedItemDate}>
                  { formatDate(tweet.created_at) }
                </Text>
                <Text style={styles.feedItemText}>{tweet.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      : 
      <View style={styles.noTweetFound}>
        <Text style={styles.noTweetFoundText}>Nenhum Tweet encontrado para</Text>
        <Text style={styles.noTweetFoundSearchText}>"{searchText}"</Text>
      </View>
      : <Loading /> : 
      <View style={styles.noSearchInputed}>
        <Text style={styles.noSearchText}>Pesquise algo acima ou escolha uma das tecnólogias abaixo:</Text>
        <Button 
        containerStyle={styles.noSearchButton} 
        buttonStyle={{backgroundColor: '#F0DB4F'}}
        title="Javascript" 
        onPress={() => setSearchText('Javascript')}
        />
        <Button 
        containerStyle={styles.noSearchButton} 
        buttonStyle={{backgroundColor: '#0ad5fc'}}
        title="React Native" 
        onPress={() => setSearchText('React Native')}
        />
        <Button 
        containerStyle={styles.noSearchButton} 
        buttonStyle={{backgroundColor: '#e535ab'}}
        title="GraphQL" 
        onPress={() => setSearchText('GraphQL')}
        />
      </View>
      }
    </SafeAreaView>
  );
}