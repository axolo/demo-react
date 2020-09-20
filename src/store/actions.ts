import {
  ADD_TODO,
  TOGGLE_TODO,
} from './action-types';

export default {
  addTodo(text: string) {
    return { type: ADD_TODO, text };
  },

  toggleTodo(index: number) {
    return { type: TOGGLE_TODO, index };
  },
};
