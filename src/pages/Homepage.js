import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Pictures from "../components/Pictures";

function Homepages() {
  const [input, setInput] = useState("");

  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const auth = "563492ad6f91700001000001f51d4c122cb74f65a0f55d2f273ac1f7";
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  //Fetch data from pexels api
  const search = async (url) => {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
  };

  const morepicture = async () => {
    let newURL;
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
    }

    setPage(page + 1);

    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(data.concat(parsedData.photos));
  };

  // Fetch data when the page loads up
  useEffect(() => {
    search(intialURL);
  }, []);

  useEffect(() => {
    if (currentSearch === "") {
      search(intialURL);
    } else {
      search(searchURL);
    }
  }, [currentSearch, searchURL]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Pictures data={d} />;
          })}
      </div>

      <div className="morePicture">
        <button onClick={morepicture}>More..</button>
      </div>
    </div>
  );
}

export default Homepages;
