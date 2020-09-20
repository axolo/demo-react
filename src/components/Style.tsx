import * as React from 'react';
import * as styles from './Style.less';

class Hello extends React.Component<any, any> {
  public render() {
    const { children } = this.props;
    return (
      <>
        <div>
          <h3>Style</h3>
          <div className="bio">Styles solution.</div>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>css</td>
                <td><span className="global">Global style from App.css</span></td>
              </tr>
              <tr>
                <td>less</td>
                <td><span className={styles.outer}>Outer style from ./Style.less</span></td>
              </tr>
              <tr>
                <td>styled-jsx</td>
                <td><span className="inner">Inner style from sytled-jsx</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <style jsx>{`
          table {
            border-collapse: collapse;
          }
          table td, table th {
            padding: 5px;
            border: 1px solid gray;
          }
          .inner { font-size: 1em; text-decoration: underline; }
          .children { font-size: 0.9em; }
        `}</style>
      </>
    );
  }
}

export default Hello;

