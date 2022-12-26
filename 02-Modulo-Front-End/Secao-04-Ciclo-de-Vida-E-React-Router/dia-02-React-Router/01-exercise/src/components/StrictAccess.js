import React from "react";
import { Redirect } from 'react-router-dom'

class StrictAccess extends React.Component {
  render() {

    const { user } = this.props

    if ( !(user.username === 'joao' && user.password === '1234') ) {
      alert('Acesso negado')

      return <Redirect to="/" />

    }

    return(
      <div>
        <p>Welcome joao!</p>
      </div>
    )
  }
}

export default StrictAccess;