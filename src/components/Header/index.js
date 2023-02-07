import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export default function Header() {
    return (
        <>
        <Box sx={{width:"300px", minHeight:'100vh', backgroundColor:'#000000', position:'absolute', overflow:'hidden'}}>
            <Typography variant='h2' component='h1' sx={{color:'#ffffff', writingMode:'vertical-lr', letterSpacing:'-.3em',  textOrientation:'upright', position:'relative',left:'255px'}}>LUXE CAVALE</Typography>
        </Box>
        <Box sx={{position:'absolute', minHeight:'100vh', left:'300px', overflow:'hidden'}}>
            <Typography variant='h2' component='h1' sx={{color:'#000000', writingMode:'vertical-lr', letterSpacing:'-.3em',   textOrientation:'upright', position:'relative',left:'-45px'}}>LUXE CAVALE</Typography>
        </Box>
        </>
    )
}