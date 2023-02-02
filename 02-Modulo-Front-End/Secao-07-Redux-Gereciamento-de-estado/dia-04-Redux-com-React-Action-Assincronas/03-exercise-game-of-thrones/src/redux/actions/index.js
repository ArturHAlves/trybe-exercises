export const searchBegin = () => ({
  type: 'SEARCH_BEGIN'
});

export const searchSucess = (character) => ({
  type: 'SEARCH_SUCESS',
  character
});

export const searchError = (error) => ({
  type: 'SEARCH_ERROR',
  error
});

export const thunkCharacter = (name) => {
  return async (dispatch) => {
    
  try {
    dispatch(searchBegin());
    const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
    const data = await response.json();
    dispatch(searchSucess(data))

  } catch (error) {
    dispatch(searchError(error));
  }
  };
};