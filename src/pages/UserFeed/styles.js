import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E8ED',
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

});