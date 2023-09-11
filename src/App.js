import { useEffect, useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import MainPage from "./components/mainpage";

function App() {
  const [isLoading, setIsLoading] = useState();
  const [hero, setHero] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (hero) console.log(hero);
  }, [hero]);

  const fetchData = async (path) => {
    const response = await fetch(path);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
    alert("Api hatasi");
    return;
  };

  const getData = async () => {
    setIsLoading(true);
    const marvelData = window.localStorage.getItem("marvelData");
    if (!marvelData) {
      const data = await fetchData(
        "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=21c4deff50c8b10883535b83bcb4368e&hash=4a94f81d38fa18041d34358a5424c38b"
      ).catch((e) => console.error(e));
      window.localStorage.setItem("marvelData", JSON.stringify(data?.data?.results));
      setHero(data?.data?.results);
    } else {
      setHero(JSON.parse(marvelData));
    }
    setIsLoading(false);
  };

 

  return (
    <Box height={"100%"}>
      <MainPage hero={hero}/>
    </Box>
  );
}

export default App;
