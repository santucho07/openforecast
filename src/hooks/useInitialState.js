import { useState, useEffect } from 'react';

const useInitialState = (URI) => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetch(URI)
      .then(response => response.json())
      .then(data => setWeather(data));
  }, []);
  return weather;
};

export default useInitialState;
