import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import contactHeader from '../../images/contactHeader.jpg'
import Image from 'mui-image';

export default function Contact() {
    console.log('ping')
    return (
        <Grid2 container component="main" sx={{ width: `calc(100% - 400px)` }}>
          <Grid2 xs={6} sx={{ height: '300px', paddingLeft: '50px' }}>
            <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Contact
            </Typography>
            <Typography>Reach out with any questions or comments.</Typography>
          </Grid2>
          <Grid2 xs={6} sx={{marginBottom:'30px'}}>
            <Image height="300px" src={contactHeader} sx={{
              webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
              maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)'
            }}></Image>
          </Grid2>
          
          </Grid2>
          )
}