import { legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};


// ACTION 
const CHANGE_TO_DARK = 'CHANGE_TO_DARK'
const CHANGE_STATUS = 'CHANGE_STATUS'

const actionChangeToDark = {
  type: CHANGE_TO_DARK
}

const actionChangeStatus = {
  type: CHANGE_STATUS
}


// Elementos html
const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch(actionChangeToDark)

  // coloque o código aqui.
});

statusButton.addEventListener('click', () => {
  store.dispatch(actionChangeStatus)
});




// reducer 
const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TO_DARK:
      return {
        ...state,
        thema: state.thema === 'dark' ? 'light' : 'dark',
      };
    case CHANGE_STATUS:
      return { 
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
       }
  
    default:
      return state
  }
}

// Store

const store = createStore(reducers)


store.subscribe(() => {

  const state = store.getState();
  const body = document.querySelector('body');
  const status = document.getElementById('status');

  if (state.theme === 'light') {
    themeButton.innerText = 'Dark Mode';
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
  } else {
    themeButton.innerText = 'Light Mode';
    body.style.backgroundColor = '#333';
    body.style.color = '#fff';
  }

  if (state.status === 'online') {
    statusButton.innerText = 'Ficar Offline';
    status.innerText = 'Online';
  } else {
    statusButton.innerText = 'Ficar Online';
    status.innerText = 'Offline';
  }
});
 
