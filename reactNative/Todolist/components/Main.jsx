import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import menuBar from '../img/menuBar.png';
import plus from '../img/plus.png';
export default function Main({navigation}) {
  const [taskArr, setTaskArr] = useState('안녕');
  return (
    <View style={styles.topBanner}>
      <TouchableOpacity>
        <Image source={menuBar} style={styles.topBannerBtn}></Image>
      </TouchableOpacity>
      <Text>Todo List</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddTask', {test: taskArr})}>
        <Image source={plus} style={styles.topBannerBtn}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topBanner: {
    padding: 5,
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBannerBtn: {
    width: 30,
    height: 30,
  },
});
