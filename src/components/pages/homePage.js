import { Box, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ heros }) {
    const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={2}
      mt={1}
      padding={1}
      sx={{ boxSizing: "border-box" }}
      height={"100%"}
      width={"100%"}
    >
      {heros?.map((hero) => (
        <Grid item xs={6} md={4} lg={3} key={hero.id}>
          <Box
          onClick={()=> navigate("/info/" + hero.id)}
            height={"240px"}
            sx={{
              width: "100%",
              backgroundColor: "#000000",
              position: "relative",
            }}
          >
            <Box
              height={"180px"}
              overflow={"hidden"}
              sx={{ width: "100%", backgroundColor: "grey" }}
            >
              <img
                src={hero?.thumbnail?.path + "." + hero?.thumbnail?.extension}
                alt="1"
                style={{
                  height: "100%",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </Box>
            <Box
              height={"60px"}
              color={"#ffffff"}
              fontWeight={"bold"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {hero.name}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default HomePage;
