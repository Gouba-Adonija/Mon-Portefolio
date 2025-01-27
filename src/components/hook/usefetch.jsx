import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Accept: "application/json; charset=utf-8",
      },
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error! status: ${r.status}`);
        }

        const contentType = r.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const a = r.json();
          console.log(a);
          return a;
        } else {
          throw new Error("La réponse n'est pas au format JSON");
        }
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Erreur:", error);
        setErrors(error.message);
      })
      .finally(setLoad(false));
  }, []);
  return { load, data, errors };
}
