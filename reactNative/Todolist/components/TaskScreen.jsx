import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react';

export default function TaskScreen({navigation, route}) {
  const {taskArr, setTaskArr, index} = route.params;
  const [task, setTask] = useState(taskArr[index]);
  function cancleAdd() {
    navigation.goBack();
  }
  function addTask() {
    if (task === '') {
      alert('할 일을 입력해주세요.');
    } else {
      setTaskArr([
        ...taskArr.slice(0, index),
        task,
        ...taskArr.slice(index + 1),
      ]);
      navigation.goBack();
    }
  }
  return (
    <View>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="할 일"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        value={task || ''}
        onChangeText={e => {
          setTask(e);
        }}></TextInput>
      <TouchableOpacity onPress={() => cancleAdd()}>
        <Text>취소</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTask()}>
        <Text>완료</Text>
      </TouchableOpacity>
    </View>
  );
}
