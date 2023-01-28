// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/action';


class App extends React.Component {
  render() {
    const { countState, dispatch } = this.props;

    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={ () => dispatch(actionCreator()) }>Incrementa 1</button>
        <button onClick={ () => dispatch(actionCreator(5)) }>Incrementa 5</button>
      </div>
    );
  }
}

const mapStateToProps = (estadoGlobal) => ({

  countState: estadoGlobal.count,
});

export default connect(mapStateToProps)(App);
