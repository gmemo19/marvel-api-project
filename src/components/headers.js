import { Box } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Headers() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };
  return (
    <Box
      sx={{
        bgcolor: "#000000",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        position: "sticky",
        top: "0",
        zIndex: "999",
      }}
      onClick={handleClick}
    >
      <Box
        height={"70px"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 35,
            width: "100%",
          }}
          alt="char"
          src="static/marvellogo.svg"
        />
      </Box>
    </Box>
  );
}

export default Headers;
