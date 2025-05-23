import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectCountry, getSelectCountry } from './slice/SelectSlice';
import App from './App';

const AppWrapper = () => {
  const dispatch = useDispatch();
  const selected = useSelector(getSelectCountry);
  const [initialized, setInitialized] = useState(false);


  useEffect(() => {
    const language = navigator.language || 'en-US';
    dispatch(setSelectCountry(language));
   
   
    console.log('navigator.language inside useEffect:', navigator.language);
    setInitialized(true);
  }, [dispatch]);

  if (!initialized || !selected) {
    return <div>Loading language...</div>;
  }

 

  return <App />;
};

export default AppWrapper;
