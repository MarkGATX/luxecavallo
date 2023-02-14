import React from "react";
import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Home() {
    return (
        <Grid2 container component="main"  sx={{width:`calc(100% - 400px)`}}>
               <Typography>Home</Typography>
               </Grid2>

    )
}