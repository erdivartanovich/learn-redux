import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

const AddTodo = ({updateText, addTodo, todoText}) => (
    <View style={{marginTop: 40, marginBottom: 40, flex: 1}}>
        <View style={{flexDirection: 'row', flex: 1}}>
            <TextInput placeholder={"Input new todo"} onChangeText={(text)=>updateText(text)} style={{flex: 1}}/>
            <TouchableOpacity onPress={()=>addTodo(todoText)}>
                <Text>Add New</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default AddTodo;
