const initialState = {
  isLoading: false,
  character: '',
};

const characterReducer =  (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_BEGIN':
     return {
      ...state,
      isLoading: true
     };
     case 'SEARCH_SUCESS':
      return {
        ...state,
        character: action.character[0],
        isLoading: false
     };
     case 'SEARCH_ERROR':
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

export default characterReducer