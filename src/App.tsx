import React, { useState, useEffect } from "react";
import { giphySearch, giphySearchOffset } from "./api/apiCalls";
import { validate } from "./validation/SearchValidation";
import { Giphys } from "./pictures/GiphyPictures";
import { giphyObjMock } from "./mocks/mocks";
import { Search } from "./search/Search";
import { useInfiniteScroll } from "./customHooks/useInfiniteScroll";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./App.css";

export const App = (): JSX.Element => {
  const getNextPage = () => {
    giphySearchOffset(submit, offset).then((data) => {
      setGiphy([...giphy, ...data.data]);
      setOffset(offset + offSet);
      setIsFetching(false);
    });
  };
  const [searchFor, setSearchFor] = useState<string>("dogs");
  const [submit, setSubmit] = useState<string>("dogs");
  const [error, setError] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useInfiniteScroll(getNextPage);
  const offSet = 12;
  const [offset, setOffset] = useState<number>(12);
  const [giphy, setGiphy] = useState(giphyObjMock);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFor(event.target.value);
  };

  const handleSubmit = () => {
    if (!validate("search", searchFor, setError)) return false;
    setSubmit(searchFor);
  };
  const getData = () => {
    giphySearch(submit).then((data) => setGiphy(data.data));
  };

  useEffect(() => {
    getData();
  }, [submit]);

  return (
    <div>
      <>
        <Search
          searchFor={searchFor}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
        />
      </>
      {giphy.length > 0 ? (
        <Giphys giphy={giphy} />
      ) : (
        <CircularProgress size={300} className={"center-spinner"} />
      )}
    </div>
  );
};

export default App;
