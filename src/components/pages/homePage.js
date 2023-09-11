import { Box, Grid } from "@mui/material";
import React from "react";

function HomePage({ hero }) {
  return (
    <Grid
      container
      spacing={2}
      padding={4}
      sx={{ boxSizing: "border-box" }}
      height={"100%"}
      width={"100%"}
    >
      {hero?.map((hero) => (
        <Grid item xs={6} md={4} lg={3} key={hero.id}>
          <Box
            height={"240px"}
            sx={{
              width: "100%",
              backgroundColor: "#000000",
              position: "relative",
            }}
          >
            <Box
              height={"180px"}
              sx={{ width: "100%", backgroundColor: "grey" }}
            ></Box>
            <Box
              height={"60px"}
              color={"#ffffff"}
              fontWeight={"bold"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign:"center"
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
