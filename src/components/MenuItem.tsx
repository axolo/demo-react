import * as React from 'react';

export class MenuItem extends React.Component<any, any> {
  public remove() {
    const { id, onRemove } = this.props;
    onRemove(id);
  }

  public render() {
    const { id, title, status } = this.props;
    return (
      <>
        <span><input type="checkbox" /></span>
        <span className="id">{id}</span>
        <span className="title">{title}</span>
        <span>{status}</span>
        <span><button onClick={() => this.remove()}>remove</button></span>
        <style jsx>{`
          span { display: inline-block; padding: 0 5px; }
          .id { min-width: 20px; text-align: right; }
          .title { min-width: 200px; }
        `}</style>
      </>
    );
  }
}

export default MenuItem;
