import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://randomuser.me/api/?page=1&results=1&seed=abc"
    );

    const json = await data.json();

    setData(json);
  };

  return data;
};

export default useFetch;
