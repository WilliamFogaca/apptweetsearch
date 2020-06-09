import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#14171A',
  },

  headerSearch: {
    marginBottom: 20,
  },

  headerText: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },

  headerSearchContainer: {
    borderRadius: 15,
  },

  headerSearchInput: {
    borderRadius: 15,
  },

  feedItem: {
    backgroundColor: '#AAB8C2',
    borderRadius: 5,
    padding: 13,
    marginBottom: 12,
    flexDirection: 'row',
  },

  feedItemImg: {
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