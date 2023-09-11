import { Box } from '@mui/material'
import React from 'react'
import Headers from './headers';
import HomePage from './pages/homePage';

function MainPage({hero}) {
    
    return(
        <Box display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        width="100%"
        overflow={"auto"}
        height={"100%"}
        sx={{ overflowX: "clip", backgroundColor: "#ffffff" }}>
        <Headers/>
<HomePage hero={hero}/>
        </Box>
    );
};

export default MainPage;