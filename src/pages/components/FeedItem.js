import React from 'react';
import { 
  View, 
  Text, 
  Image,
  StyleSheet
} from 'react-native';

/* Pngs */
import tweetOptions from '../../assets/tweet-options.png';
import tweetFavorite from '../../assets/tweet-favorite.png';
import tweetComment from '../../assets/tweet-comment.png';

/* helpers */
import { formatDate } from '../../helpers';

export default function FeedItem(props) {
  const { 
    user: {
      profile_image_url: profile_image_url, 
      name: name
    }, 
    created_at, 
    text 
  } = props.tweetInfos;
  return (
    <View style={styles.feedItem} >
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
            <Image source={tweetOptions} />
          </View>
        </View>
        <View style={styles.feedItemContentbody}>
          <Text style={styles.feedItemText}>{text}</Text>
        </View>
        <View style={styles.feedItemContentFooter}>
          <Image style={styles.feedItemContentFooterImg} source={tweetFavorite} />
          <Image style={styles.feedItemContentFooterImg} source={tweetComment} />
        </View>
      </View>
    </View>
  );
}

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
    borderRadius: 48/2,
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