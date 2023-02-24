import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import cavaleLogo from '../../images/cavale_logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import gsap from "gsap";
import { useRef } from "react";
import './Header.css'
import { useState } from "react";
import { Drawer } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import CheckroomIcon from '@mui/icons-material/Checkroom';
import DiamondIcon from '@mui/icons-material/Diamond';
import BlenderIcon from '@mui/icons-material/Blender';
import Toolbar from "@mui/material/Toolbar";
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { useMenuContext } from "../../utils/menuContext";
import { Link } from "react-router-dom";
import { memo } from "react";
import StraightenIcon from '@mui/icons-material/Straighten';
import HomeIcon from '@mui/icons-material/Home';


const sideWidth = 200;
let drawerWidth = 200;
const menuItems = [{ 'Home': HomeIcon }, { 'Men': MaleIcon }, { 'Women': FemaleIcon }, { 'Accessories': DiamondIcon }, { 'Houseware': BlenderIcon }]
const contactItems = [{ 'Sizing': StraightenIcon }, { 'About': InfoIcon }, { 'Contact': CallIcon }]


const Header = () => {
    // const [currentDrawer, setCurrentDrawer] = useState(false);
    const [menuAction, setMenuAction] = useState('Open')
    const { isMenuOpen, toggleMenu } = useMenuContext();
    const sideContrastText = useRef();
    const mainContrastText = useRef();
    const sideContrastHorse = useRef();
    const mainContrastHorse = useRef();
    const burger = useRef();


    function slideDrawer() {
        toggleMenu();
        console.log(isMenuOpen)
        const menuDrawer = document.querySelector('.MuiDrawer-paper')
        // true = drawer open, so if false, open drawer
        { isMenuOpen ? setMenuAction('Open') : setMenuAction('Close') }
        if (!isMenuOpen) {
            gsap.to(sideContrastText.current, { duration: 1, x: -120 })
            gsap.to(sideContrastHorse.current, { duration: 1, x: -120 })
            gsap.to(mainContrastText.current, { duration: 1, x: -120 })
            gsap.to(mainContrastHorse.current, { duration: 1, x: -120 })
            gsap.to(burger.current, { duration: 1, x: 90 })
            gsap.to(menuDrawer, { duration: 1, ease: 'power1.out', x: 200, zIndex: 1200 })
        } else {
            gsap.to(menuDrawer, { duration: 1, ease: 'none', x: -200, zIndex: -1 })
            gsap.to(sideContrastText.current, { duration: 1, x: 0 })
            gsap.to(sideContrastHorse.current, { duration: 1, x: 0 })
            gsap.to(mainContrastText.current, { duration: 1, x: 0 })
            gsap.to(mainContrastHorse.current, { duration: 1, x: 0 })
            gsap.to(burger.current, { duration: 1, x: 0 })

        }
    }

    return (
        <>

            <Box sx={{ width: sideWidth, minHeight: '100vh', backgroundColor: 'headerBack.main', position: 'absolute', overflow: 'hidden' }}>

                <Box sx={{ width: '200px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingTop: '1em' }}>
                    <Box ref={burger} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <MenuIcon className='menuIcon' onClick={() => slideDrawer()} sx={{ color: 'headerBack.contrastText' }} />
                        <Typography variant='subtitle2' sx={{ color: 'headerBack.contrastText' }}>{menuAction}</Typography>
                    </Box>
                    <img src={cavaleLogo} ref={sideContrastHorse} alt='Gold Luxe Cavale Logo' className='cavaleLogoGold'></img>
                </Box>
                <Typography className='headerTitle' ref={sideContrastText} variant='h2' component='h1' sx={{ color: 'headerBack.contrastText', writingMode: 'vertical-lr', letterSpacing: '-.6em', textOrientation: 'upright', position: 'relative', left: '155px' }}>LUXE CAVALLO</Typography>
            </Box>
            <Box sx={{ position: 'absolute', minHeight: '100vh', left: sideWidth, overflow: 'hidden' }}>
                <Drawer
                    sx={{
                        width: drawerWidth,

                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            backgroundColor: 'secondary.main',
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            zIndex: '-1',
                            left: '-200px',
                            position: 'absolute',
                            overflow: 'hidden',
                            justifyContent: 'space-between',
                            padding: '1rem 0 1rem 0',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    {/* <Toolbar /> */}
                    <List>
                        {menuItems.map((item, index) => {
                            const text = Object.keys(item)[0];
                            const Icon = Object.values(item)[0];
                            console.log(Icon)
                            return (
                                text === 'Home' ? (<Link key={index} to={`/`}>
                                <ListItem disablePadding>

                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Icon />
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                                </Link> ) : (
                                    <Link key={index} to={`/${text}`}>
                                        <ListItem disablePadding>

                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <Icon />
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>)
                            
                            );
                        })}
                    </List>
                    <Toolbar />
                    <List>
                        {contactItems.map((item, index) => {
                            const text = Object.keys(item)[0];
                            const Icon = Object.values(item)[0];
                            console.log(Icon)
                            return (
                                <Link key={index} to={`/${text}`}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Icon />
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            );
                        })}
                    </List>
                </Drawer>
                <Box sx={{ width: sideWidth, paddingTop: '1em' }}>
                    <Link to={`/`}><img src={cavaleLogo} ref={mainContrastHorse} alt='Dark Luxe Cavale Logo' className='cavaleLogo'></img></Link>
                </Box>
                <Typography className='headerTitle' ref={mainContrastText} variant='h2' component='h1' sx={{ color: 'text.main', writingMode: 'vertical-lr', letterSpacing: '-.6em', textOrientation: 'upright', position: 'relative', left: '-45px', fontWeight: '900' }}>LUXE CAVALLO</Typography>
            </Box>
        </>
    )
}

export default memo(Header);