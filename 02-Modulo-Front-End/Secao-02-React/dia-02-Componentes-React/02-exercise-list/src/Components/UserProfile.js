import React, { Component } from 'react';
import Image from './Image';

class UserProfile extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <p>{user.name}</p>
        <p> {user.email} </p>
        < Image source={ user.avatar } alternativeText='User Avatar' />
      </div>
    );
  }
}

export default UserProfile;
