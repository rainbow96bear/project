import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default function AddTask({route}) {
  return (
    <View>
      <Text>할 일의 제목을 입력하세요.</Text>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="할 일"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        // onChangeText={titleInput}
      ></TextInput>
      {/* <TouchableOpacity onPress={() => testfunc(title)}>
        <Text>여기 눌러요</Text>
      </TouchableOpacity> */}
      <Text>{route.params.test}</Text>
    </View>
  );
}
