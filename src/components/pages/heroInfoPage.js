import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helpers/serviceHelpers";
import BackButton from "../helpers/backButton";
import GoInfoUrl from "../helpers/goInfoUrl";

function HeroInfoPage({ heros }) {
  const { id } = useParams();
  const [herosComics, setHerosComics] = useState([]);
  const [selectedHero, setSelectedHero] = useState([]);

  useEffect(() => {
    if (herosComics) console.log(herosComics);
  }, [herosComics]);

  useEffect(() => {
    getDataComics();
  }, []);

  const getDataComics = async () => {
    // setIsLoading(true);
    const hero = heros?.find((hero) => hero.id.toString() === id);
    if (!hero) {
      return;
    }
    setSelectedHero(hero);
    const data = await fetchData(
      `https://gateway.marvel.com/v1/public/characters/${hero.id}/comics?ts=1&apikey=21c4deff50c8b10883535b83bcb4368e&hash=4a94f81d38fa18041d34358a5424c38b`
    ).catch((e) => console.error(e));
    setHerosComics(data?.data?.results);
    // setIsLoading(false);
  };

  return selectedHero ? (
    <Box height={"100%"} sx={{ width: "100%" }}>
      <Box height={"300px"} overflow={"hidden"} sx={{ width: "100%" }}>
        <img
          src={
            selectedHero?.thumbnail?.path +
            "." +
            selectedHero?.thumbnail?.extension
          }
          alt="1"
          style={{
            height: "100%",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </Box>
      <Box height={"50px"} sx={{width:"100%",display:"flex",justifyContent:"space-between"}}>
      <Box
        
        fontSize={"20px"}
        fontWeight={"bold"}
        sx={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          paddingLeft: "15px",
        }}
      >
        {selectedHero.name}
      </Box>
      <GoInfoUrl selectedHero={selectedHero} />
      </Box>
      <Box
        height={"150px"}
        fontSize={"15px"}
        sx={{
          width: "350px",
          display: "flex",
          paddingLeft: "15px",
        }}
      >
        {selectedHero.description ? (
          selectedHero.description
        ) : (
          <Box
            height={"150px"}
            sx={{
              width: "100%",
              display: "flex",
              textAlign: "flex-start",
            }}
          >
            Description not found..
          </Box>
        )}
      </Box>
      <Box
        height={"50px"}
        fontSize={"20px"}
        fontWeight={"bold"}
        sx={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          paddingLeft: "15px",
        }}
      >
        #Comics
      </Box>
      <Grid container spacing={2}>
        {herosComics.map((comics, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Box
              height={"100%"}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                paddingLeft: "15px",
              }}
            >
              <Box
                height={"150px"}
                overflow={"hidden"}
                sx={{ width: "100px", backgroundColor: "grey" }}
              >
                <img
                  src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                  alt={`comics-${index}`}
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </Box>
              <Box
                height={"100%"}
                sx={{
                  width: "250px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box fontSize={"13px"} fontWeight={"bold"} paddingLeft={"5px"}>
                  {comics?.title}
                </Box>
                <Box fontSize={"11px"} paddingLeft={"5px"} paddingTop={"5px"}>
                  {comics?.description ? (comics?.description) : ( <Box>Description not found..</Box>)}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <BackButton/>
    </Box>
  ) : (
    <div>characters not found</div>
  );
}

export default HeroInfoPage;
