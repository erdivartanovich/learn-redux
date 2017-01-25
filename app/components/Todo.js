import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const Todo = ({onClick, completed, title}) => (
    <TouchableOpacity onClick={onClick}>
        <View style={{flexDirection: 'row'}}>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
);

export default Todo;
