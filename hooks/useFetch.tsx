import { useEffect, useState } from "react";

export const useFetch = (endpoint: string): TApiResponse => {
  const [data, setData] = useState<Array<Object> | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/${endpoint}`);
        if (!res.ok) {
          throw new Error("Unable to fetch data.");
        }
        const data = await res.json();
        setData(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
