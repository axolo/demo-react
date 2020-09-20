import * as React from 'react';
import store from '@/store';
import actions from '@/store/actions';
import TodoItem from './item';

export class Todo extends React.Component<any, any> {
  public constructor(props: object) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  /**
   * **父子组件传值**
   *
   * - 父子组件传值方式：子组件props调用父组件方法操作父组件state
   * - Redux统一管理状态：子组件内部可操作父组件state
   *
   * ### 父组件
   *
   * ```jsx
   * <TodoItem
   *    index={index}
   *    item={item}
   *    toggleCompleted={index => this.toggleCompleted(index)}
   * />
   * ```
   *
   * ### 子组件
   *
   * ```jsx
   * <input
   *    type="checkbox"
   *    checked={item.completed}
   *    onChange={() => this.toggleCompleted()}
   *  />
   * ```
   *
   * ```js
   * toggleCompleted() {
   *   const { index, toggleCompleted } = this.props;
   *   toggleCompleted(index)
   * }
   * ```
   *
   * @memberof Todo
   */
  public toggleCompleted(index: number) {
    const { items } = this.state.todo;
    items[index].completed = !items[index].completed;
    this.setState({ items });
  }

  public addItem() {
    const name: string = this.state.name;
    store.dispatch(actions.addTodo(name));
    this.setState({ name: '' });
  }

  public inputTodo(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }

  public render() {
    const { items } = this.state.todo;
    return (
      <>
        <h3>Todo</h3>
        <div className="bio">Use Redux manager state.</div>
        <input
          type="text"
          value={this.state.name}
          placeholder="todo something"
          onChange={e => this.inputTodo(e) }
        />
        <button onClick={() => this.addItem()}>add</button>
        <ul>
          {items.map((item: object, index: number) => (
            <li key={index}>
              <TodoItem
                index={index}
                item={item}
                toggleCompleted={(index: number) => this.toggleCompleted(index)}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Todo;
