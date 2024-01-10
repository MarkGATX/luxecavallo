import React from "react";
// import { Typography } from "@mui/material"
import splashVidmp4 from '../../images/cavallo_bg_vid5.mp4'
import splashVid from '../../images/cavallo_bg_vid6.webm'
import vidFallback from '../../images/cavallo_bg_mov_fallback.webp'
import './Home.css'
import Box from "@mui/material/Box";
// import { useRef } from "react";
import { useContext } from "react";
import { MenuContext } from "../../utils/menuContext";
import { SizeContext } from "../../utils/sizeContext";

export default function Home() {
    // const luxe = useRef();
    // const curated = useRef();
    const menuValue = useContext(MenuContext);
    const desktopView = useContext(SizeContext)
    
    const menuDrawers = document.querySelectorAll('.menuDrawer .MuiPaper-root');
    let drawerHeight = ''
    if (menuDrawers.length === 1) {
        drawerHeight = menuDrawers[0].clientHeight;

    } else {
 
    }
    // const mainWidthValue = menuValue.isMenuOpen ? (window.innerWidth - 400) : (window.innerWidth - 200);
    // const mainHeightValue = desktopView.isDesktop ? '100dvh' : (window.innerHeight-80);
    // const mainTopValue = menuValue.isMenuOpen ? `${80 + drawerHeight}px`  : `80px`;
    return (
        <>
            <Box component="main" sx={{
                transition: 'top .7s ease-in-out, left .7s ease-in-out',
                width: desktopView.isDesktop ? (menuValue.isMenuOpen ? `calc(100% - 400px)` : `calc(100% - 200px)`) : `100%`,
                // width: desktopView.isDesktop ? mainWidthValue : `100%`,
                left: desktopView.isDesktop ? (menuValue.isMenuOpen ? `400px` : `200px`) : 0,
                overflow: 'hidden',
                top: desktopView.isDesktop ? `0` : !menuValue.isMenuOpen ? `80px` : `calc(80px + ${drawerHeight}px)`,
                // top: desktopView.isDesktop ? `0` : mainTopValue,
                height: desktopView.isDesktop ? '100vh' : `calc(100vh-80px)`,
                // height: mainHeightValue,
                overflowY: 'auto',
                alignContent: 'flex-start',
                zIndex: '-1'
            }}>
                <video autoPlay muted loop id="splashVid" poster={vidFallback} style={{zIndex:'-1'}}>
                    <source src={splashVid} type="video/webm" />
                    <source src={splashVidmp4} type="video/mp4" />
                </video>

                {/* {menuValue.isMenuOpen ?
                    <Box ref={luxe} className="videoText" sx={{ width: desktopView.isDesktop ? `80%` : `100%`, left: desktopView.isDesktop ? '300px' : 0, position: 'absolute', top: desktopView.isDesktop ? '75%' : `65%`, opacity: '.7' }}>
                        <Typography variant='h1' className="homeTitle" sx={{ textAlign: 'center', fontWeight: '500', color: 'primary.main' }}>Luxe Cavallo</Typography>
                    </Box>

                    :
                    <Box ref={luxe} className="videoText" sx={{ width: desktopView.isDesktop ? `calc(100% - 400px)` : `100%`, left: desktopView.isDesktop ? '200px' : 0, position: 'absolute', top: desktopView.isDesktop ? '55%' : '65%', opacity: '.7' }}>
                        <Typography variant='h1' className="homeTitle" sx={{ textAlign: 'center', fontWeight: '500', color: 'primary.main' }}>Luxe Cavallo</Typography>
                    </Box>} */}

                {/* {menuValue.isMenuOpen
                    ?
                    <Box ref={curated} className="videoText" sx={{ width: desktopView.isDesktop ? `80%` : `100%`, left: desktopView.isDesktop ? '300px' : 0, opacity: '.7',  bottom: '-100px', backgroundColor:'black', zIndex:'2' }}>
                        <Typography variant='h1' className='homeSubtitle' sx={{ textAlign: 'center', color: 'primary.main' }}>Curated collections for discerning clients.</Typography>
                    </Box>
                    :
                    <Box className="videoText" ref={curated} sx={{ width: desktopView.isDesktop ? `80%` : `100%`, left: desktopView.isDesktop ? '200px' : 0, bottom: '-100px',zIndex:'2',  backgroundColor:'black'}}>
                        <Typography variant='h1' className="homeSubtitle" sx={{ textAlign: 'center', color: 'primary.main' }}>Curated collections for discerning clients.</Typography>
                    </Box>
                } */}

            </Box>
        </>
    )
}