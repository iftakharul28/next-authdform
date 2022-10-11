import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export const useInput = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const reset = () => setValue(initValue);

  const attributeObj = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, reset, attributeObj];
};

export const useValue = (initValue) => {
  const [value, setValue] = useState(initValue);

  const reset = () => setValue(initValue);

  const attributeObj = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, reset, attributeObj];
};
