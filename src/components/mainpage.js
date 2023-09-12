import { Box } from "@mui/material";
import React from "react";
import Headers from "./headers";
import HomePage from "./pages/homePage";
import HeroInfoPage from "./pages/heroInfoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MainPage({ heros }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width="100%"
      overflow={"auto"}
      height={"100%"}
      sx={{ overflowX: "clip", backgroundColor: "#ffffff" }}
    >
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<HomePage heros={heros} />}></Route>
          <Route
            path="/info/:id"
            element={<HeroInfoPage heros={heros}  />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default MainPage;
