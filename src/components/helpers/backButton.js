import React from "react";
import { Fab, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";


const BackButton = () => {
    const navigate = useNavigate();

  const buttonStyle = {
    position: "fixed",
    bottom: "2rem",
    left: "2rem", 
    backgroundColor: "#000000",
    color: "#fff",
    width: "40px",
    height: "40px",
    "&:hover": {
      backgroundColor: "#1565c0",
    },
  };

  const iconStyle = {
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

 

  return (
    

    <Fab sx={buttonStyle}  onClick={()=> navigate("/")}>
      <Box sx={iconStyle}>
        <ArrowBackIcon />
      </Box>
    </Fab>
    
  );
};

export default BackButton;