import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, UPDATE_TODO_TEXT, VisibilityFilters } from '../actions';
import { SET_VENUE_TAG, SET_VENUE_NEARBY, SET_VENUE_CITY } from '../actions/discover';

const { SHOW_ALL } = VisibilityFilters;
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todoText(state = '', action) {
  switch (action.type) {
    case UPDATE_TODO_TEXT:
      return action.text;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, {
          title: action.text,
          id: new Date().getTime(),
          completed: false,
          synced: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

function discover(state = { is_nearby: false, tag: '', coordinate: {}, city: '' }, action) {
  switch (action.type) {
    case SET_VENUE_TAG:
      return { ...state, tag: action.tag };
    case SET_VENUE_NEARBY:
      return { ...state, is_nearby: action.is_nearby, coordinate: action.coordinate };
    case SET_VENUE_CITY:
      return { ...state, city: action.city };
    default:
      return state;
  }
}


export default combineReducers({ visibilityFilter, todoText, todos, discover });
