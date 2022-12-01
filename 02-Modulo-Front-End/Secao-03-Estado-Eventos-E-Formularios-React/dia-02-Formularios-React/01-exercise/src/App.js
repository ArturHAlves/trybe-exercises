import React from 'react';
import Forms from './components/Forms';

export default class App extends React.Component {
  state = {
    name: '',
  };


  handleChange = (evt) => {
    // console.log(evt.target.value)
    
    const { name } = evt.target

    this.setState({ [name]: evt.target.value })
  }

  render() {
    return (
      <>
        <Forms value={this.state} handleChange={this.handleChange} />
      </>
    );
  }
}
