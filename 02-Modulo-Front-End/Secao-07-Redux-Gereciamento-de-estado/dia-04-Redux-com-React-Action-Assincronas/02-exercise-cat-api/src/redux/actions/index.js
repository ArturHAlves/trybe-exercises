export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const fetchAPI =  () => {
  return async (dispatch) => {
    dispatch(requestAPI());

    const endpoint = 'https://aws.random.cat/meow'
    const response = await fetch(endpoint);
    const data = await response.json();
    dispatch(getPicture(data))
  };
}
