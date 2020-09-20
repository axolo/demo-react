import * as React from 'react';
import store from '@/store';
import actions from '@/store/actions'

export class TodoItem extends React.Component<any, any> {

  public toggleCompleted() {
    const { index, toggleCompleted } = this.props;
    toggleCompleted(index);
  }

  public toggleTodo() {
    const { index } = this.props;
    store.dispatch(actions.toggleTodo(index));
  }

  public render() {
    const { item } = this.props;
    return (
      <>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => this.toggleTodo()}
        />
        <span>{item.text}</span>
      </>
    );
  }
}

export default TodoItem;
