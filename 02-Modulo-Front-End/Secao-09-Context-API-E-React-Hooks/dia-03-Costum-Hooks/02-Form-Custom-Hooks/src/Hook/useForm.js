import { useState } from 'react';

function useForm(initialState) {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value: value,
    onChange: onChange,
  };
}

export default useForm;
