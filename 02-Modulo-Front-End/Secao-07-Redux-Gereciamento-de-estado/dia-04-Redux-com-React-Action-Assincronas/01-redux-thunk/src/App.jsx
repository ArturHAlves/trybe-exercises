// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchDogImage } from "./redux/actions";


class App extends React.Component {
  render() {
    const { isLoading, imageURL, dispatch } = this.props;

    if (isLoading) return <p>Carregando...</p>;

    return (
      <div>
        <button
          onClick={() => { dispatch(fetchDogImage()) }}
          type="button"
        >
          Novo Doguinho
        </button>
        {
          imageURL &&
          <img
            src={imageURL}
            alt="Imagem de um cachorro aleatório"
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageURL: state.dogReducer.imageURL,
  loading: state.dogReducer.isLoading,
});

export default connect(mapStateToProps)(App);
