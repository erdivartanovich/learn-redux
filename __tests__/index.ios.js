import 'react-native';
import React from 'react';
import todoApp from '../app/reducers';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
let store = createStore(todoApp);
import {addTodo} from '../app/actions';
store.dispatch(addTodo('hello world'));
import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {

  const tree = renderer.create(
    <Index />
  );
  expect(tree).toMatchSnapshot();

});
