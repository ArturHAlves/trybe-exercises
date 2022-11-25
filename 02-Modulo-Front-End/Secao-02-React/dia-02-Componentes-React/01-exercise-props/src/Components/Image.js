import React from "react";

class Image extends React.Component {
  render() {

    const { source, alternativeText } = this.props;

    return (
      <img src={source} alt={alternativeText}></img>
    )
  }
}

export default Image; 