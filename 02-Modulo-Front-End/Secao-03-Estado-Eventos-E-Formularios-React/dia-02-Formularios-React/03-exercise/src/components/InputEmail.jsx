import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputEmail extends Component {
  render() {
    const { email, handleChange } = this.props;


    const limite_caracteres = 20;


    return (
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <span>{!email ? 'Precisa preencher' : ''}</span>
        <span>{email.length > limite_caracteres ? 'texto muit grande' : ''}</span>
      </label>
    );
  }
}

InputEmail.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
};
