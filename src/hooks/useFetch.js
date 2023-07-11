import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, { ...options, signal });
        if (!response.ok)
          throw new Error(`HTTP error status: ${response.status}`);
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (error) {
        if (error.name === 'AbortError') {
        } else {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return [data, isLoading, error];
};

export default useFetch;
