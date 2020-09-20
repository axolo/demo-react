import * as React from 'react';

class Hello extends React.Component<any, any> {
  public render() {
    const { children, name } = this.props;
    return (
      <div>
        <h3>Hello</h3>
        <p>Hello, {name}!</p>
        <p>{children}</p>
      </div>
    );
  }
}

export default Hello;
