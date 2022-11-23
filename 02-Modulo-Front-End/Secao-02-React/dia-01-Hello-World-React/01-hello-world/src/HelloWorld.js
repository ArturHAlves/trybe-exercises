import React from 'react';
import './HelloWorld.css'

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1 className='styleH1'>Hello, World</h1>
        <p className='styleP'> Você vai conseguir!!</p>
      </div>
    );
  }
}

export default Hello;
