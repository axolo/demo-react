import * as React from 'react';

export class MenuItem extends React.Component<any, any> {
  public remove() {
    const { id, onRemove } = this.props;
    onRemove(id);
  }

  public render() {
    const { id, name, status } = this.props;
    return (
      <div>
        <span><input type="checkbox" /></span>
        <span className="id">{id}</span>
        <span className="title">{name}</span>
        <span>{status}</span>
        <span><button onClick={() => this.remove()}>remove</button></span>
        <style jsx>{`
          div span { padding: 5px }
        `}</style>
      </div>
    );
  }
}

export default MenuItem;
