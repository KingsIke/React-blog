import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController(); //for clearning up fetch issue

    setTimeout(() => {
      const getData = async () => {
        try {
          const getAll = await fetch(url, { signal: abortCont.signal });
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
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(error.message);
          }
        }
      };
      getData();
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
