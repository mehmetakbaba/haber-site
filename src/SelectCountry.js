import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectCountry } from './slice/SelectSlice';
import { useLazyGetTRNewsQuery } from './slice/TRSlice';
import { useLazyGetFRNewsQuery } from './slice/FRSlice';
import { useLazyGetUSANewsQuery } from './slice/USASlice';

function useSelectCountry() {
  const selectCountry = useSelector(getSelectCountry);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [getTRNews, { data: trData, isLoading: trLoading, error: trError }] = useLazyGetTRNewsQuery();
  const [getFRNews, { data: frData, isLoading: frLoading, error: frError }] = useLazyGetFRNewsQuery();
  const [getUSANews, { data: usaData, isLoading: usaLoading, error: usaError }] = useLazyGetUSANewsQuery();

  useEffect(() => {
    if (selectCountry === 'tr-TR') {
      getTRNews();
    } else if (selectCountry === 'fr-FR') {
      getFRNews();
    } else if (selectCountry === 'en-US') {
      getUSANews();
    }
  }, [selectCountry]);

  useEffect(() => {
    if (selectCountry === 'tr-TR') {
      setData(trData);
      setLoading(trLoading);
      setError(trError);
    } else if (selectCountry === 'fr-FR') {
      setData(frData);
      setLoading(frLoading);
      setError(frError);
    } else if (selectCountry === 'en-US') {
      setData(usaData);
      setLoading(usaLoading);
      setError(usaError);
    }
  }, [selectCountry, trData, trLoading, trError, frData, frLoading, frError, usaData, usaLoading, usaError]);

  return { data, loading, error };
}

export default useSelectCountry;
