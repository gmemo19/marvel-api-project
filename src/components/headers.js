import { Box } from "@mui/material";
import React from "react";

function Headers() {
  return (
    <Box
      sx={{
        bgcolor: "#000000",
        minHeight: "100px",
        maxHeight: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
    <Box height={"100%"} sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>

      <Box
        component="img"
        sx={{
          height: 30,
          width: "100%",
        }}
        alt="char"
        src="static/marvellogo.svg"
      />
      <Box height={"15px"} fontSize={"13px"} color={"#ffffff"}>
        Choose your marvel character
      </Box>
    </Box>
    </Box>
  );
}

export default Headers;
