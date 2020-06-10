import { StyleSheet } from 'react-native';

const paddingHorizontal = 15;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    paddingHorizontal: paddingHorizontal,
    backgroundColor: '#F5F8FA',
  },
  
  headerText: {
    fontSize: 22,
    color: '#14171A',
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
  },

  headerSearchContainer: {
    borderRadius: 15,
    marginBottom: 10,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#657786',
  },

  headerSearchInput: {
    borderRadius: 15,
    backgroundColor: '#434c56',
  },

  feedList: {
    backgroundColor: '#E1E8ED',
    padding: 15,
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

  noTweetFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noTweetFoundText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#14171A',
  },

  noTweetFoundSearchText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#14171A',
  },

  noSearchInputed: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: paddingHorizontal,
  },

  noSearchText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#14171A',
    marginBottom: 15,
  },

  noSearchButton: {
    width: '60%',
    marginBottom: 10,
  },


});