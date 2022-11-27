import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function AddTask({navigation, route}) {
  const [task, setTask] = useState('');
  function addTask(newTask) {
    if (task === '') {
      alert('할 일을 입력해주세요.');
    } else {
      route.params.setTaskArr([...route.params.taskArr, newTask]);
      navigation.goBack();
    }
  }
  function cancleAdd() {
    navigation.goBack();
  }
  return (
    <View style={styles.base}>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="transparent"
        placeholder="할 일"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        value={task}
        onChangeText={text => {
          setTask(text);
        }}></TextInput>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => cancleAdd()}>
          <Text>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={() => addTask(task)}>
          <Text>할 일 추가</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  base: {
    flex: 1,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  inputBox: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9a73ef',
    borderStyle: 'solid',
  },
  btnBox: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
  },
  btnStyle: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#9a73ef',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9a73ef',
    borderStyle: 'solid',
  },
});
