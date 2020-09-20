import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
} from './action-types';

interface Todo {
  index: number,
  text: string,
  completed: boolean,
}

interface Action {
  type: string,
  index?: number,
  text?: string,
}
interface State {
  name?: string;
  items?: Array<object>
}

const defaultState: object = {
  items: [
    { text: 'Vue.js', completed: true },
    { text: 'React', completed: false },
  ]
};

export default combineReducers({
  todo(state: State = defaultState, action: Action) {
    switch (action.type) {
      default: {
        return state;
      }
      case ADD_TODO: {
        const res = {
          ...state,
          items: [
            ...state.items,
            {
              text: action.text,
              completed: false,
            }
          ]
        };
        return res;
      }
      case TOGGLE_TODO: {
        const items = state.items.map((todo: Todo, index) => {
          if (index === action.index) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        });
        const res = { ...state, items };
        return res;
      }
    }
  },
});
