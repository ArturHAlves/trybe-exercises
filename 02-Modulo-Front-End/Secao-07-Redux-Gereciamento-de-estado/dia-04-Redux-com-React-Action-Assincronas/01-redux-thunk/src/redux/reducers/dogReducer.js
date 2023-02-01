import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from "../actions";


  const initialState = {
    isLoading: false,
    imageURL: '',
    errorMessage: '',
  };

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED: 
    return {
      ...state,
      isLoading: true,
      imageURL: '',
      errorMessage: '',
    };

    case REQUEST_SUCCESSFUL: 
    return {
      ...state,
      isLoading: false,
      imageURL: action.payload,
      errorMessage: ''
    };

    case REQUEST_FAILED: 
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload,
      imageURL: '',
    };
    default:
      return state
  }
};

export default dogReducer