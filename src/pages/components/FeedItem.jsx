/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

/* Pngs */
import TweetOptions from '../../assets/tweet-options.svg';
import TweetFavorite from '../../assets/tweet-favorite.svg';
import TweetComment from '../../assets/tweet-comment.svg';

const FeedItem = ({
  tweetInfos: {
    user: {
      profile_image_url,
      name,
    },
    created_at,
    text,
  },
}) => {
  const formatDate = (date) => {
    const data = new Date(date);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
  };

  return (
    <View style={styles.feedItem}>
      <Image
        style={styles.feedItemImg}
        source={{ uri: profile_image_url }}
      />
      <View style={styles.feedItemContent}>
        <View style={styles.feedItemContentHeader}>
          <View style={styles.feedItemContentHeaderNameDate}>
            <Text style={styles.feedItemName}>{name}</Text>
            <Text style={styles.feedItemDate}>
              {formatDate(created_at)}
            </Text>
          </View>
          <View style={styles.feedItemContentHeaderFeedOptions}>
            <TweetOptions />
          </View>
        </View>
        <View style={styles.feedItemContentbody}>
          <Text style={styles.feedItemText}>{text}</Text>
        </View>
        <View style={styles.feedItemContentFooter}>
          <TweetFavorite style={styles.feedItemContentFooterImg} />
          <TweetComment style={styles.feedItemContentFooterImg} />
        </View>
      </View>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  feedItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 13,
    marginVertical: 6,
    flexDirection: 'row',
  },

  feedItemImg: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    marginRight: 10,
  },

  feedItemContent: {
    flex: 1,
  },

  feedItemContentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  feedItemName: {
    fontSize: 18,
    lineHeight: 19,
    fontWeight: '700',
    color: '#161F3D',
    marginBottom: 3,
  },

  feedItemDate: {
    fontSize: 12,
    fontStyle: 'italic',
    lineHeight: 13,
    color: '#161F3D',
  },

  feedItemContentbody: {
    marginBottom: 20,
  },

  feedItemText: {
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '300',
    color: '#161F3D',
  },

  feedItemContentFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  feedItemContentFooterImg: {
    marginHorizontal: 7,
  },
});
