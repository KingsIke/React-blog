import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        try {
          const getAll = await fetch(url);
          console.log(getAll);
          if (!getAll.ok) {
            throw Error(" Sorry could not fetch the data from the network");
          }
          const resp = await getAll.json();
          console.log(resp);
          setData(resp);
          setLoading(false);
          setError(null);
        } catch (error) {
          setError(error.message);
        }
      };
      getData();
    }, 1000);
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
