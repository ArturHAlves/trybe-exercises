import React, { Component } from 'react'

export default class Termos extends Component {
  render() {

    const { concorda, handleChange } = this.props

    return (

          <label htmlFor="concorda">
            Você concorda?
            <input
              type="checkbox"
              name="concorda"
              id="concorda"
              onChange={handleChange}
              checked={concorda}
            />
          </label>

    )
  }
}
