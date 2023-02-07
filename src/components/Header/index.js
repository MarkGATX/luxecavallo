import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import cavaleLogo from '../../images/cavale_logo.svg'
import './Header.css'

export default function Header() {
    return (
        <>
        
        <Box sx={{width:"300px", minHeight:'100vh', backgroundColor:'#1d1b16', position:'absolute', overflow:'hidden'}}>
            <Box sx={{width:'300px', display: 'flex',justifyContent: 'flex-end'}}>
            <img src={cavaleLogo}  className='cavaleLogoGold'></img>
            </Box>
            <Typography variant='h2' component='h1' sx={{color:'#ffe170', writingMode:'vertical-lr', letterSpacing:'-.6em',  textOrientation:'upright', position:'relative',left:'255px'}}>LUXE CAVALE</Typography>
        </Box>
        <Box sx={{position:'absolute', minHeight:'100vh', left:'300px', overflow:'hidden'}}>
            <Box sx={{width:'300px'}}>
            <img src={cavaleLogo} className='cavaleLogo'></img> 
            </Box>
            <Typography variant='h2' component='h1' sx={{color:'#1d1b16', writingMode:'vertical-lr', letterSpacing:'-.6em',   textOrientation:'upright', position:'relative',left:'-45px'}}>LUXE CAVALE</Typography>
        </Box>
        </>
    )
}