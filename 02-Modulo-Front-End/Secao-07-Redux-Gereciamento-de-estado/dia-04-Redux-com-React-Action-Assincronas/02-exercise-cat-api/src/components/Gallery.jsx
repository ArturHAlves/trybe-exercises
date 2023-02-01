import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Gallery extends Component {
  render() {
    const defaultCat =
      'https://content-assets.betrybe.com/prod/eb34a38d-a37f-43ca-9def-1575752cf6b2-cat-img-thunk.gif';
    const { imgPath, isLoading, useDefaultImg } = this.props;
    return (
      <div className="gallery-container">
        {isLoading && <div>Loading...</div>}
        {useDefaultImg && <img src={defaultCat} alt="default cat" />}
        {!isLoading && !useDefaultImg && <img src={imgPath} alt="random cat" />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imgPath: state.imgURL.file,
  isLoading: state.isLoading,
  useDefaultImg: state.defaultImg,
});

export default connect(mapStateToProps)(Gallery);
