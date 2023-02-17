import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import aboutHeader from '../../images/live_cavallo.jpg'
import Image from 'mui-image';
import markPic from '../../images/step_repeat_LA.jpg'
import gsapLogo from '../../images/gsap-greensock.svg'


export default function About() {

    return (
        <Grid2 container component="main" sx={{ width: `calc(100% - 400px)`, alignContent: 'flex-start' }}>
            <Grid2 xs={5} sx={{ height: '300px', paddingLeft: '50px' }}>
                <Typography variant='h1' sx={{ paddingTop: '50px', marginBottom: '50px' }}>About Us
                </Typography>
                <Typography>All About Luxe Cavallo</Typography>
            </Grid2>
            <Grid2 xs={7} sx={{ marginBottom: '30px' }}>
                <Image height="300px" src={aboutHeader} sx={{
                    webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
                    maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)', marginRight: '50px'

                }}></Image>
            </Grid2>
            <Grid2 xs={12} sx={{ paddingLeft: '50px', marginBottom: '1em' }} >
                <Typography variant="h3">History of Luxe Cavallo - It's fake.</Typography>
            </Grid2>
            <Grid2 xs={7} sx={{ paddingLeft: '50px' }}>
                <Typography variant="body1">Luxe Cavallo is a fictional luxury boutique designed by Front End and Full Stack Developer, Mark Gardner. That's me, by the way. It was designed to be an exercise in continuing to develop my skills in React, Material UI, GraphQL, and GreenSock while continuing my job search.</Typography>
                <br />
                <Typography variant='h4' sx={{marginBottom:'1em'}}>Tech Stack</Typography>
                <Grid2 container spacing={2} sx={{ justifyContent:'center', flexWrap:'wrap' }}>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex',flexWrap:'wrap', justifyContent: 'center', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width='70%' height="auto" sx={{display:'block'}} />
                        <Typography variant='body1'>React</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" width='70%' height="auto"  />
                        <Typography variant='body1'>GraphQL</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width='70%' height="auto"  />
                        <Typography variant='body1'>CSS3</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width='70%' height="auto"  />
                        <Typography variant='body1'>Express</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width='70%' height="auto"  />
                        <Typography variant='body1'>GitHub</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" width='70%' height="auto"  />
                        <Typography variant='body1'>Heroku</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width='60%' height="auto"  />
                        <Typography variant='body1'>HTML5</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  width='70%' height="auto"  />
                        <Typography variant='body1'>JavaScript</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"  width='70%' height="auto"  />
                        <Typography variant='body1'>MaterialUI</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"  width='70%' height="auto"  />
                        <Typography variant='body1'>MongoDB</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"  width='70%' height="auto"  />
                        <Typography variant='body1'>npm</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"  width='70%' height="auto"  />
                        <Typography variant='body1'>Photoshop</Typography>
                    </Grid2>
                    <Grid2 xs={2} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap:'wrap', alignItems: 'center'}}> 
                        <Image src={gsapLogo}  width='70%' height="auto"  />
                        <Typography variant='body1'>Greensock</Typography>
                    </Grid2>
                </Grid2>
                <br/>
                <Typography variant='h4' sx={{marginBottom:'1em'}}>Development</Typography>
                <Typography variant="body1">The idea began with simply wanting to turn the header element on its side and add some animation elements to the menus. Because of that, the initial wireframing focused on screen sizes for tablet and above. Those initial wireframes were also notoriously sparse; sparser than I usually create. That made the actual coding more difficult than it should have been since I hadn't adequately planned out how to use the MUI Grid2 or how the Drawer component in MUI could work as the header. But eventually it all came together.</Typography>
                <br />
                <Typography variant="body1">The initial idea was to generate AI images to use for product images in the catalog as well. It turned out that without doing some fairly extensive modification, the AI images were at times almost laughable. I finally decided that it would be more effective to keep the tone of the site more in line with the intended audience. I went to Pexels and pulled stock images and replaced them in my database after standardizing the sizes. That took extra time as well, but I look at it as keeping my Photoshop skills sharp as well. You can also find attributions for all the images used below.</Typography>
                <br/>
                <Typography variant='h4' sx={{marginBottom:'1em'}}>Attributions</Typography>
            </Grid2>
            <Grid2 xs={4} sx={{ paddingRight: '50px' }}>
                <Image src={markPic} alt="Mark Gardner interviewed at IAWTV event" width="100%" height="auto"></Image>
            </Grid2>
        </Grid2>

    )
}