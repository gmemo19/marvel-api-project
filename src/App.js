import { useEffect, useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import MainPage from "./components/mainpage";
import { fetchData } from "./components/helpers/serviceHelpers";

function App({ getDataComics }) {
  const [isLoading, setIsLoading] = useState();
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (heros) console.log(heros);
  }, [heros]);

  const getData = async () => {
    setIsLoading(true);
    const marvelData = window.localStorage.getItem("marvelData");
    if (
      !marvelData ||
      marvelData === "undefined" ||
      marvelData === "[]"
    ) {
      const data = await fetchData(
        "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=21c4deff50c8b10883535b83bcb4368e&hash=4a94f81d38fa18041d34358a5424c38b"
      ).catch((e) => console.error(e));
      window.localStorage.setItem(
        "marvelData",
        JSON.stringify(data?.data?.results)
      );
      setHeros(data?.data?.results);
    } else {
      setHeros(JSON.parse(marvelData));
    }
    setIsLoading(false);
  };

  return (
    <Box height={"100%"}>
      <MainPage heros={heros} />
    </Box>
  );
}

export default App;
