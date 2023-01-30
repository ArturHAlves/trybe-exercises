// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { actionCreator, actionClick } from './redux/action';


class App extends React.Component {
  render() {
    const { countState, dispatch, countClick } = this.props;

   const dispatchAll = (add = 1) => {
    dispatch(actionCreator(add))
    dispatch(actionClick())
   }

    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={ () => dispatchAll() }>Incrementa 1</button>
        <button onClick={ () => dispatchAll(5) }>Incrementa 5</button>
        <h2>Numero de clicks: { countClick } </h2>
      </div>
    );
  }
}

const mapStateToProps = (estadoGlobal) => ({

  countState: estadoGlobal.count,
  countClick: estadoGlobal.clicks,
});

export default connect(mapStateToProps)(App);
