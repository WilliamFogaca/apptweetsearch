import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14171A',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E1E8ED',
    paddingVertical: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  headerUserInfos: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  UserImg: {
    borderRadius: 48/2,
    marginRight: 10,
  },

  UserName: {
    fontSize: 22,
    fontWeight: '700',
  },

  feedList: {
    paddingHorizontal: 10,
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