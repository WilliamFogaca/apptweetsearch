import { StyleSheet } from 'react-native';

const paddingHorizontal = 15;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E8ED',
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