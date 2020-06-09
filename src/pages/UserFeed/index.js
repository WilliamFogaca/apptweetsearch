import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* Styles */
import styles from './styles';

/* PNGs */
import profileImg from '../../assets/profile.jpg';
import backImg from '../../assets/back.png';

export default function UserFeed() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerUserInfos}>
          <Image source={profileImg} style={styles.UserImg} />
          <Text style={styles.UserName}>Martin Palmer</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="#14171A" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.feedList}
        data={[1, 2, 3]}
        keyExtractor={feedItem => String(feedItem) }
        renderItem={() => (
          <View style={styles.feedItem} >
            <Image source={profileImg} style={styles.feedItemImg} />
            <View style={styles.feedItemContent}>
              <Text style={styles.feedItemName}>Martin Palmer</Text>
              <Text style={styles.feedItemDate}>08/06/2020, 15:24</Text>
              <Text style={styles.feedItemText}>What is the loop of Creation? How is there something from nothing? In spite of the fact that it is impossible to prove that anythin….</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}