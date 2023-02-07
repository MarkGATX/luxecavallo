import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import cavaleLogo from '../../images/cavale_logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'

const sideWidth = 200;

export default function Header() {
    return (
        <>
        
        <Box sx={{width:sideWidth, minHeight:'100vh', backgroundColor:'headerBack.main', position:'absolute', overflow:'hidden'}}>
            
            <Box sx={{width:'200px', display: 'flex',justifyContent: 'flex-end',alignItems:'center', paddingTop:'1em'}}>
            <MenuIcon className='menuIcon' sx={{color:'headerBack.contrastText'}}/>
            <img src={cavaleLogo} alt='Gold Luxe Cavale Logo' className='cavaleLogoGold'></img>
            </Box>
            <Typography variant='h2' component='h1' sx={{color:'headerBack.contrastText', writingMode:'vertical-lr', letterSpacing:'-.6em',  textOrientation:'upright', position:'relative',left:'155px'}}>LUXE CAVALE</Typography>
        </Box>
        <Box sx={{position:'absolute', minHeight:'100vh', left:sideWidth, overflow:'hidden'}}>
            <Box sx={{width:sideWidth,  paddingTop:'1em'}}>
            <img src={cavaleLogo} alt='Dark Luxe Cavale Logo' className='cavaleLogo'></img> 
            </Box>
            <Typography variant='h2' component='h1' sx={{color:'text.main', writingMode:'vertical-lr', letterSpacing:'-.6em',   textOrientation:'upright', position:'relative',left:'-45px', fontWeight:'900'}}>LUXE CAVALE</Typography>
        </Box>
        </>
    )
}