/* eslint-disable camelcase */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';

/* Styles */
import styles from './styles';
/* Components */
import Loading from '../components/Loading';
import FeedItem from '../components/FeedItem';
/* Queries */
import { UserFeedQuery } from '../../GraphQL/queries/UserFeedQuery';

const UserFeed = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    name,
    profile_image_url,
    screen_name,
    followers_count,
    tweets_count,
  } = route.params.userInfos;

  const { loading, data } = useQuery(UserFeedQuery, {
    variables: { userScreenName: screen_name, count: 10 },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerUserBack}>
          <View style={styles.headerUserInfos}>
            <Image
              style={styles.UserImg}
              source={{ uri: profile_image_url }}
            />
            <Text style={styles.UserName}>{name}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={28} color="#14171A" />
          </TouchableOpacity>
        </View>
        <View style={styles.followersTweets}>
          <View style={styles.followers}>
            <Text style={styles.followersTweetsCounter}>{followers_count}</Text>
            <Text style={styles.followersTweetsText}>Seguidores</Text>
          </View>
          <View style={styles.tweets}>
            <Text style={styles.followersTweetsCounter}>{tweets_count}</Text>
            <Text style={styles.followersTweetsText}>Tweets</Text>
          </View>
        </View>
      </View>

      { !loading
        ? (
          <FlatList
            style={styles.feedList}
            contentContainerStyle={{ paddingBottom: 21 }}
            data={data.twitter.user.tweets}
            keyExtractor={(tweet) => String(tweet.id)}
            renderItem={({ item: tweet }) => (
              <FeedItem tweetInfos={tweet} />
            )}
          />
        )
        : <Loading /> }
    </SafeAreaView>
  );
};

export default UserFeed;
