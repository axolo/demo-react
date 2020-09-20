import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '@/App.css';
import Home from '@/pages/home';
import Style from '@/pages/style';
import Menu from '@/pages/Menu';
import Todo from '@/components/Todo';

class App extends React.Component<any, any> {
  public render() {
    return (
      <Router>
        <nav id="react">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/style">Style</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/todo">Todo</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/style" component={Style}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/todo" component={Todo}/>
        </Switch>
        <style jsx>{`
          nav ul { margin: 0; padding: 0; }
          nav ul li { display: inline-block; padding: 5px; }
        `}</style>
      </Router>
    );
  }
}

export default App;
