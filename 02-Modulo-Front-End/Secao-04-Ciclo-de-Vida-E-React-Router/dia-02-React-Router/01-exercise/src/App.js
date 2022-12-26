import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/strict-access">Acesso</Link>
            </li>
          </ul>
        </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              path="/users/:id"
              render={(id) => <Users {...id} greetingsMessage="Good Morning" />}
            />
            <Route path='/strict-access' render={ () => <StrictAccess user={ { userName: 'joao', password: '1234' } } /> }  /> 
          </Switch>
      </div>
    );
  }
}

export default App;
