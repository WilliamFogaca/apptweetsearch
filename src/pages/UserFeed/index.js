import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';

/* Styles */
import styles from './styles';
/* Components */
import Loading from '../components/Loading';
import FeedItem from '../components/FeedItem';
/* Queries */
import { UserFeedQuery } from '../../GraphQL/queries/UserFeedQuery';

export default function UserFeed() {
  const navigation = useNavigation();
  const route = useRoute();

  const [countFeedItems, setCountFeedItems] = useState(10);

  const userInfos = route.params.userInfos;

  const {loading, data} = useQuery(UserFeedQuery, {
    variables: { userScreenName: userInfos.screen_name, count: countFeedItems }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerUserBack}>
          <View style={styles.headerUserInfos}>
            <Image
              style={styles.UserImg}
              source={{uri: userInfos.profile_image_url}}
            />
            <Text style={styles.UserName}>{userInfos.name}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={28} color="#14171A" />
          </TouchableOpacity>
        </View>
        <View style={styles.followersTweets}>
            <View style={styles.followers}>
              <Text style={styles.followersTweetsCounter}>{userInfos.followers_count}</Text>
              <Text style={styles.followersTweetsText}>Seguidores</Text>
              
            </View>
            <View style={styles.tweets}>
              <Text style={styles.followersTweetsCounter}>{userInfos.tweets_count}</Text>
              <Text style={styles.followersTweetsText}>Tweets</Text>
            </View>
          </View>
      </View>

      { !loading ? 
      <FlatList
        style={styles.feedList}
        contentContainerStyle={{paddingBottom: 21}}
        data={data.twitter.user.tweets}
        keyExtractor={(tweet) => String(tweet.id) }
        renderItem={ ({ item: tweet }) => (
          <FeedItem tweetInfos={tweet} />
        )}
      />
      : <Loading /> }
    </SafeAreaView>
  );
}