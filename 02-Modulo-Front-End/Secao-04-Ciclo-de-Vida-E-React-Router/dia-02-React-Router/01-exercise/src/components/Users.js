import React, { Component } from 'react';

class Users extends Component {
  render() {

    const { greetingsMessage, match: { params: {id} } } = this.props

    return (
      <div>
        <h2>Users</h2>
        <p> {greetingsMessage}, {id} você é foda </p>
      </div>
    );
  }
};

export default Users;
