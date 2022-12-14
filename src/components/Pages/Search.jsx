import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Search = () => {
    return (
        <Box
        sx={{
            display : "grid",
            gridTemplateColumns :{ 
                xs :"repeat(auto-fit,minmax(100px,1fr))",
                md :"repeat(auto-fit,minmax(125px,1fr))",
                lg :"repeat(auto-fit,minmax(165px,1fr))",
                xl :"repeat(auto-fit,minmax(220px,1fr))",
            },
            placeItems : "center",
            alignItems : "start",
            width : "min(1000px , 80vw)",
            rowGap : {
                xs : 1,
                lg : 3
            },
            height : "calc(100vh - 60px)",
        }}>
            
        </Box>
    );
}

export default Search;
