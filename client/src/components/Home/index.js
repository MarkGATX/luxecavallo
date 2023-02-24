import React from "react";
import { Typography } from "@mui/material"
import splashVid from '../../images/cavallo_bg_vid5.mp4'
import './Home.css'
import gsap from "gsap";
import Box from "@mui/material/Box";
import { useRef } from "react";
import { useEffect } from "react";




export default function Home() {
    const elegant = useRef();
    const exquisite = useRef();
    const luxe = useRef();
    const fashion = useRef();
    const accessory = useRef();
    const more = useRef();
    const curated = useRef();
    
    


    useEffect(() => {
        const video = document.querySelector('video');
  const tl = gsap.timeline({repeat:-1});


        tl.fromTo(elegant.current, { opacity: 0 }, { opacity: .7, duration: 1 }, '+=1.2');
        tl.to(elegant.current, { opacity: 0, duration: 1 }, '+=5.5');
        tl.fromTo(exquisite.current, { opacity: 0 }, { opacity: .7, duration: 1 }, '-=.5');
        tl.to(exquisite.current, { opacity: 0, duration: 1 }, '+=3.7');
        tl.fromTo(luxe.current, { opacity: 0 }, { opacity: .7, duration: 1 }, '-=.5');
        tl.fromTo(fashion.current, { opacity: 0 }, { opacity: .7, duration: 1 });
        tl.to(fashion.current, { opacity: 0, duration: 1 }, '+=2');
        tl.fromTo(accessory.current, { opacity: 0 }, { opacity: .7, duration: 1 }, '-=.5');
        tl.to(accessory.current, { opacity: 0, duration: 1 }, '+=2');
        tl.fromTo(more.current, { opacity: 0 }, { opacity: .7, duration: 1 }, '-=.5');
        tl.to(more.current, { opacity: 0, duration: 1 }, '+=2');
        tl.fromTo(curated.current, { opacity: 0 }, { opacity: .7, duration: 1 });
        tl.to(curated.current, { opacity: 0, duration: 1 }, '+=12');
        tl.to(luxe.current, { opacity: 0, duration: 1 }, '-=1');
        tl.play();

        
    },[])




    return (
        <>
            <Box component="main" sx={{ width: `calc(100% - 200px)`, left: '200px', zIndex: '-1', overflow: 'hidden' }}>
                <video autoPlay muted loop id="splashVid" >
                    <source src={splashVid} type="video/mp4" />
                </video>
                <Box ref={elegant} sx={{ width: '100%', position: 'absolute', top: '170px', left: '230px' }}>
                    <Typography variant='h1' className="videoText" sx={{ fontSize: '3vw !important', color: 'primary.main', fontWeight: '500', WebkitTextStroke: `2px`, WebkitTextStrokeColor: (theme) => theme.palette.headerBack.main }}>Elegant</Typography>
                </Box>
                <Box ref={exquisite} sx={{ width: '100%', position: 'absolute' }}>
                    <Typography variant='h1' className="videoText" sx={{ fontSize: '3vw !important', position: 'absolute', top: '470px', right: '150px', color: 'primary.main', fontWeight: '500', WebkitTextStroke: `2px`, WebkitTextStrokeColor: (theme) => theme.palette.headerBack.main }}>Exquisite</Typography>
                </Box>
                <Box ref={luxe} sx={{ width: '100%', position: 'absolute', top: '55%', }}>
                    <Typography variant='h1' className="videoText" sx={{ fontSize: '5.5vw !important', textAlign: 'center', fontWeight: '500', color: 'primary.main', WebkitTextStroke: `2px`, WebkitTextStrokeColor: (theme) => theme.palette.headerBack.main }}>Luxe Cavallo</Typography>
                </Box>
                <Box ref={fashion} sx={{ width: '100%', position: 'absolute', top: '70%', }}>
                    <Typography variant='h1' className="videoText" sx={{ fontSize: '3vw !important', textAlign: 'center', color: 'primary.main', WebkitTextStroke: `2px`, WebkitTextStrokeColor: (theme) => theme.palette.headerBack.main }}>Fine fashion,</Typography>
                </Box>
                <Box ref={accessory} sx={{ width: '100%', position: 'absolute', top: '70%', }}>
                    <Typography variant='h1' className="videoText" sx={{ fontSize: '3vw !important', textAlign: 'center', color: 'primary.main', WebkitTextStroke: `2px`, WebkitTextStrokeColor: (theme) => theme.palette.headerBack.main }}>accessories,</Typography>
                </Box>
                <Box ref={more} sx={{ width: '100%', position: 'absolute', top: '70%', }}>
                    <Typography variant='h1' className="videoText" sx={{ fontSize: '3vw !important', textAlign: 'center', color: 'primary.main', WebkitTextStroke: `2px`, WebkitTextStrokeColor: (theme) => theme.palette.headerBack.main }}>and more.</Typography>
                </Box>
                <Box ref={curated} sx={{ width: '100%', position: 'absolute', top: '70.5%', }}>
                    <Typography variant='h1' className="videoText" sx={{ fontSize: '2.vw !important', textAlign: 'center', color: 'primary.main', WebkitTextStroke: `1px`, WebkitTextStrokeColor: (theme) => theme.palette.headerBack.main }}>Curated collections for discerning clients.</Typography>
                </Box>

            </Box>
        </>
    )
}