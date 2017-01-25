import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Todo from './Todo';
const TodoList = ({todos, onTodoClick}) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {todos.length > 0 &&
        todos.map((todo)=><Todo
            key={todo.id}
            {...todo}
            onClick={()=>onTodoClick(todo.id)}
        />)}
        {todos.length > 0 || <Text>Empty Content</Text>}
    </View>
);

export default TodoList;
