import { useState } from 'react';

function useForm(initialState) {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue('');
  };

  return {
    value: value,
    onChange: onChange,
    clear,
  };
}

export default useForm;
