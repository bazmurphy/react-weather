import { useState, useEffect } from "react";

const useFetch = (url) => {
  console.log(`useFetch ran`);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      (async () => {
        try {
          const response = await fetch(url);
          const responseJson = await response.json();
          // console.log(`useFetch responseJson: `, responseJson);
          if (!response.ok) {
            const errorObject = {
              response : {
                status : response.status,
                statusText: response.statusText
              },
              ...responseJson,
            }
            throw errorObject;
          }
          setData(responseJson);
          setError(null); // is this correct here?
        } catch (errorObject) {
          setError(errorObject);
        } finally {
          setLoading(false);
        }
      })();
    }, [url]);
  
  return { loading, data, error };
};

export default useFetch;