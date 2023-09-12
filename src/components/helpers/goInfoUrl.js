import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/material";
import { useState } from "react";

function GoInfoUrl({ selectedHero }) {

const [urlDetail,setUrlDetail] = useState();

  const UrlClick = () => {
    const url = selectedHero?.urls?.find((url) => url.type === "detail");
    if (url) {
        setUrlDetail(url.url);
        window.open(url.url, "_blank"); // Yeni sekmede URL'yi açar
      }
  };

  return (
    <Box
      height={"50px"}
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      paddingRight={"15px"}
       component="a"
            href="#"
      onClick={UrlClick}
    >
      <InfoIcon />

      <Box sx={{ paddingLeft: "5px", fontSize: "15px" }}>Go More Detail</Box>
    </Box>
  );
}
export default GoInfoUrl;
