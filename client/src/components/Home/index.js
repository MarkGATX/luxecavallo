import React from "react";
import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// import splashVid from '../../images/cavallo_bg_vid4.mp4'
import './Home.css'

export default function Home() {
    return (
        <>
        <Grid2 container component="main"  sx={{width: `calc(100% - 200px)`, left:'200px', zIndex:'-1', overflow:'hidden'}}>
               {/* <video autoPlay muted loop id="splashVid" >
                    <source src={splashVid} type="video/mp4" />
                </video> */}
        </Grid2>
        </>
    )
}