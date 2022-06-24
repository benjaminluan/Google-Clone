import { useState, useEffect } from "react";
import API_KEY from "./Keys.js";

const CONTEXT_KEY = "3368dea2438c71727";

const UseGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  // This will return data useEffect()
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data }
};

export default UseGoogleSearch;
