import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// action 
const NEXT_COLOR = 'NEXT_COLOR'
const PREVIOUS_COLOR = 'PREVIOUS_COLOR'


const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE , action) => {

  switch(action.type) {
    case NEXT_COLOR:
      return { 
        ...state,
        // Se o index for igual ao final vai para o 0 ou acrescenta 1
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1 
      };
    case PREVIOUS_COLOR: 
      return { 
        ...state,
        // se o index for igual a 0, vai para o último e decrementa 1
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1
      }
    default: 
    return state
  }
}

const store = createStore(reducer, composeWithDevTools());

const nextColor = document.querySelector('#next');
const previousColor = document.querySelector('#previous');


nextColor.addEventListener('click', () => {
  store.dispatch({ type: NEXT_COLOR });
})

previousColor.addEventListener('click', () => {
  store.dispatch({ type: PREVIOUS_COLOR });
})


store.subscribe( () => {
  const { colors, index } = store.getState();
  console.log(index);

  document.querySelector('#value').innerHTML = colors[index]
  document.querySelector('#container').style.background = colors[index]

});






