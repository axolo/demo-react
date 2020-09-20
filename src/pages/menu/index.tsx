import * as React from 'react';
import MenuItem from './item';

class Menu extends React.Component<any, any> {
  public constructor(props: object) {
    super(props);
    this.state = {
      name: '',
      items: [],
    };
  }

  public inputName(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;
    this.setState({ name });
  }

  public addItem() {
    const { name, items } = this.state;
    if (!name) return;
    const item = {
      id: Date.now(),
      name,
      status: 0
    };
    this.setState({ items: items.concat(item) });
  }

  public removeItem(id: number) {
    const { items } = this.state;
    const index = items.findIndex((item: { id: number }) => item.id === id);
    items.splice(index, 1);
    this.setState({ items });
  }

  public render() {
    const { name, items } = this.state;
    return (
      <>
        <h3>Menu</h3>
        <div className="bio">Parent and clidren pass value each other.</div>
        <fieldset>
          <legend>Please input item for menu</legend>
          <label htmlFor="item">Name</label>
          <input id="item" value={name} required onChange={e => this.inputName(e)} />
          <button onClick={() => this.addItem()}>add</button>
          <ul>
            {items.map((item: { id: number }) => (
              <li key={item.id}>
                <MenuItem {...item} onRemove={(id: number) => this.removeItem(id)} />
              </li>)
            )}
          </ul>
        </fieldset>
      </>
    );
  }
}

export default Menu;
