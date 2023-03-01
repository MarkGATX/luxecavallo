import React from "react";
import { Typography } from "@mui/material"
import splashVid from '../../images/cavallo_bg_vid5.mp4'
import './Home.css'
import Box from "@mui/material/Box";
import { useRef } from "react";
import { useContext } from "react";
import { MenuContext } from "../../utils/menuContext";
import { SizeContext } from "../../utils/sizeContext";


export default function Home() {
    const luxe = useRef();
    const curated = useRef();
    const menuValue = useContext(MenuContext);
    const desktopView = useContext(SizeContext)
    

    const menuDrawers = document.querySelectorAll('.menuDrawer .MuiPaper-root');
    let drawerHeight =''
    if (menuDrawers.length === 1) {
        drawerHeight = menuDrawers[0].clientHeight;
        console.log(`The height of the drawer is ${drawerHeight}px.`);
    } else {
        console.log(`There are ${menuDrawers.length} matching elements.`);
    }

    return (
        <>
            <Box component="main" sx={{ 
                width: desktopView.isDesktop ? `calc(100% - 200px)` : `100%`, 
                left: desktopView.isDesktop ? '200px' : 0, 
                zIndex: '-1', 
                overflow: 'hidden', 
                top: desktopView.isDesktop ? `0` : !menuValue.isMenuOpen ? `80px` : `calc(80px + ${drawerHeight}px)`,
                height: desktopView.isDesktop ? `100vh` : `none`,
                }}>
                <video autoPlay muted loop id="splashVid" >
                    <source src={splashVid} type="video/mp4" />
                </video>

                {!menuValue.isMenuOpen ? 
                    <Box ref={luxe} className="videoText" sx={{ width: desktopView.isDesktop ? `calc(100% - 400px)` : `100%`, left: desktopView.isDesktop ? '200px' : 0, position: 'absolute', top: desktopView.isDesktop ? '55%' : '65%', opacity: '.7' }}>
                    <Typography variant='h1' className="homeTitle" sx={{ textAlign: 'center', fontWeight: '500', color: 'primary.main' }}>Luxe Cavallo</Typography>
                </Box> 
                    : <Box ref={luxe} className="videoText" sx={{ width: desktopView.isDesktop ? `calc(100% - 400px)` : `100%`, left: desktopView.isDesktop ?'300px' : 0 , position: 'absolute', top: desktopView.isDesktop ? '55%' : `65%`, opacity: '.7' }}>
                    <Typography variant='h1' className="homeTitle" sx={{ textAlign: 'center', fontWeight: '500', color: 'primary.main' }}>Luxe Cavallo</Typography>
                </Box>}

                {!menuValue.isMenuOpen ? 
                    <Box className="videoText" ref={curated} sx={{ width: desktopView.isDesktop ? `calc(100% - 400px)` : `100%`, left: desktopView.isDesktop ? '200px' : 0, position: 'absolute', bottom: '10%', }}>
                    <Typography variant='h1' className="homeSubtitle" sx={{ textAlign: 'center', color: 'primary.main' }}>Curated collections for discerning clients.</Typography>
                </Box> : 
                    <Box ref={curated} className="videoText" sx={{ width: desktopView.isDesktop ? `calc(100% - 400px)` : `100%`, left: desktopView.isDesktop ? '300px' : 0, position: 'absolute', bottom: '10%' }}>
                    <Typography variant='h1' className='homeSubtitle' sx={{ textAlign: 'center', color: 'primary.main' }}>Curated collections for discerning clients.</Typography>
                </Box>}

            </Box>
        </>
    )
}