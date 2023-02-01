
// Action 
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({
  type: REQUEST_STARTED
});

const requestSucessful = (imageURL) => ({
  type: REQUEST_SUCCESSFUL,
  payload: imageURL
});

const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  payload: error,
});


export const fetchDogImage = () => {
  return async (dispatch) => {
    dispatch(requestStarted());
    
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json()
      const { message } = data
      dispatch(requestSucessful(message))
    } catch(error) {
      dispatch(requestFailed(error))
    }
  };
};