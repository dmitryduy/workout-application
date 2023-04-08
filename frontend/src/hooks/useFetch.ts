import { useEffect, useState } from 'react';


const useFetch = <T>(path: string) => {
  const [data, setData] = useState<T | null>(null);
  const [state, setState] = useState<'loading' | 'done' | 'error' | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setState('loading');
      const response = await fetch('http://localhost:5000' + path);
      const json = await response.json();
      setData(json);
    };
    fetchData()
      .catch(() => setState('error'));
  }, []);

  useEffect(() => {
    data && setState('done');
  }, [data]);

  return {data, progress: state};
};

export default useFetch;