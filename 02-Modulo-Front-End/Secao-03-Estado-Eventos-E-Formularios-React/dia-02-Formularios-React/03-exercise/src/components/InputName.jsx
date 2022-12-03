import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputName extends Component {
  render() {
    const { name, handleChange } = this.props;

    const limite_caracteres = 20;

    let error = undefined;

    if (name.length > limite_caracteres) error = 'Muito grande';

    return (
      <label htmlFor="name">
        Nome:
        <input type="text" name="name" onChange={handleChange} value={name} />
        {/* <span>{!error ? 'Digite alguma coisa' : '' } </span>  */}
        <span> {error ? error : ''} </span>
      </label>
    );
  }
}

InputName.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
