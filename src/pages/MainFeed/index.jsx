/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';

/* Styles */
import styles from './styles';
/* Components */
import Loading from '../components/Loading';
import FeedItem from '../components/FeedItem';
/* Queries */
import { MainSearchQuery } from '../../GraphQL/queries/MainSearchQuery';

const MainFeed = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [limit, setLimit] = useState(10);
  const [count] = useState(10);

  const {
    loading, data, refetch, fetchMore, networkStatus,
  } = useQuery(MainSearchQuery, {
    variables: { qText: (searchText !== '') ? searchText : 'Javascript', count },
  });

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    renderContent();
  }, [searchText]);

  const changeSearchTextLimit = (text) => {
    setSearchText(text);
    setLimit(count);
  };

  const renderContent = () => {
    if (searchText === '') {
      return (
        <View style={styles.noSearchInputed}>
          <Text style={styles.noSearchText}>Pesquise algo acima ou escolha uma das tecnólogias abaixo:</Text>
          <Button
            containerStyle={styles.noSearchButton}
            buttonStyle={{ backgroundColor: '#F0DB4F' }}
            title="Javascript"
            onPress={() => changeSearchTextLimit('Javascript')}
          />
          <Button
            containerStyle={styles.noSearchButton}
            buttonStyle={{ backgroundColor: '#0ad5fc' }}
            title="React Native"
            onPress={() => changeSearchTextLimit('React Native')}
          />
          <Button
            containerStyle={styles.noSearchButton}
            buttonStyle={{ backgroundColor: '#e535ab' }}
            title="GraphQL"
            onPress={() => changeSearchTextLimit('GraphQL')}
          />
        </View>
      );
    }

    if (loading) {
      return (
        <Loading />
      );
    }

    if (!loading) {
      if (data.twitter.search.length === 0) {
        return (
          <View style={styles.noTweetFound}>
            <Text style={styles.noTweetFoundText}>Nenhum Tweet encontrado para</Text>
            <Text style={styles.noTweetFoundSearchText}>
              {`"${searchText}"`}
            </Text>
          </View>
        );
      }
    }
    return (
      <FlatList
        style={styles.feedList}
        contentContainerStyle={{ paddingBottom: 21 }}
        data={data.twitter.search}
        refreshing={networkStatus === 4}
        onRefresh={() => refetch({
          variables: {
            count: 10,
          },
        })}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          const newLimit = limit + count;
          fetchMore({
            variables: {
              count: newLimit,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult || fetchMoreResult.twitter.search.length === 0) {
                return prev;
              }
              setLimit(newLimit);
              const prevResultConcat = [...prev.twitter.search, ...fetchMoreResult.twitter.search];
              const result = prevResultConcat.reduce((unique, item) => (unique.some((itemSome) => itemSome.id === item.id) ? unique : [...unique, item]), []);

              return {
                twitter: {
                  // eslint-disable-next-line no-underscore-dangle
                  __typename: prev.twitter.__typename,
                  search: result,
                },
              };
            },
          });
        }}
        ListFooterComponent={
          !loading ? <ActivityIndicator style={styles.flatListBottomLoading} size={40} color="#1DA1F2" /> : ''
        }
        keyExtractor={(tweet) => tweet.id}
        renderItem={({ item: tweet }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('UserFeed', { userInfos: tweet.user })}
            activeOpacity={0.8}
          >
            <FeedItem tweetInfos={tweet} />
          </TouchableOpacity>
        )}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1DA1F2" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Procurar Tweets</Text>
        <SearchBar
          containerStyle={styles.headerSearchContainer}
          inputContainerStyle={styles.headerSearchInput}
          onChangeText={(text) => changeSearchTextLimit(text)}

          placeholder="Pesquise aqui"
          value={searchText}
        />
      </View>

      { renderContent() }
    </SafeAreaView>
  );
};

export default MainFeed;
