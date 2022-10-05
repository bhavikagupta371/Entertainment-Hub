import React from "react";
import { ThemeProvider, createTheme, Pagination } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme=createTheme({
    palette: {
        mode:'dark',
    },
});
export default function CustomPagination({ setPage, numOfPages = 10 }) {

    const handelPageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    };
    return (
    <div 
    style={{
        width: "100%",
        display: "flex",
        justifyContent:"center",
        marginTop: 10,
    }}
    >
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Pagination 
         onChange={(e) =>handelPageChange(e.target.textContent)} count={numOfPages} 
         color='primary'
         />
         
         
         </ThemeProvider>
    </div>
    )
};

