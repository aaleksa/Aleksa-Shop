'use client'
import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


export default function TitlePage(props) {
    return (

        <Box sx={{display: "block"}}>
            <Typography variant="h1">{props.title}</Typography>
        </Box>

    );
}