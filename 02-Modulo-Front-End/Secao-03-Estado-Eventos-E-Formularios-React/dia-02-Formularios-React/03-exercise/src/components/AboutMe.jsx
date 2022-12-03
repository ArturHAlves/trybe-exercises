import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {

    const { aboutMe, handleChange } = this.props

    return (
      <label htmlFor="aboutMe">
        Sobre você:
        <textarea
          name="aboutMe"
          id="aboutMe"
          onChange={handleChange}
          value={aboutMe}
        />
      </label>
    );
  }
}
