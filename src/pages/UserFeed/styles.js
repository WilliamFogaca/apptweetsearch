import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  headerUserBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerUserInfos: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  UserImg: {
    width: 48,
    height: 48,
    borderRadius: 48/2,
    marginRight: 10,
  },

  UserName: {
    fontSize: 22,
    fontWeight: '700',
  },

  followersTweets: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

 
  followersTweetsCounter: {
    textAlign: 'center',
    fontSize: 16,
    color: '#161F3D',
    fontFamily: 'Roboto',
  },
  followersTweetsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#161F3D',
    opacity: 0.3,
  },

  feedList: {
    padding: 15,
    backgroundColor: '#E1E8ED',
  },

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
    marginBottom: 12,
  },

  feedItemText: {
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '300',
    color: '#161F3D',
  },

});