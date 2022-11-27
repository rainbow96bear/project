import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import plus from '../img/plus.png';
export default function Main({navigation, route}) {
  const [taskArr, setTaskArr] = useState(['할 일']);
  return (
    <View style={styles.base}>
      <ScrollView style={styles.taskBox}>
        {taskArr.map((item, index) => (
          <Text style={styles.taskItem}>
            {index + 1}. {item}
          </Text>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addTaskBtn}
        onPress={() =>
          navigation.navigate('AddTask', {
            taskArr,
            setTaskArr,
          })
        }>
        <Image source={plus} style={styles.addTaskBtnImg}></Image>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  base: {
    flex: 1,
    padding: 10,
    position: 'relative',
  },
  addTaskBtn: {
    padding: 13,
    backgroundColor: '#9a73ef',
    position: 'absolute',
    right: 35,
    bottom: 35,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#9a73ef',
    borderStyle: 'solid',
  },
  addTaskBtnImg: {
    width: 30,
    height: 30,
  },
  taskBox: {
    paddingBottom: 10,
  },
  taskItem: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#9a73ef',
    borderStyle: 'solid',
  },
});
