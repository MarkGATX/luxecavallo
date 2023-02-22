import React from 'react';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { QUERY_WOMENS } from '../../utils/queries';
import ProductList from "../ProductList";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import womensHeader from '../../images/womenswear_header.jpg';
import Image from 'mui-image';

export default function WomensProduct() {
    return (
    <Grid2 container component="main" sx={{ width: `calc(100% - 400px)` }}>    
        <Grid2 xs={7} sx={{ height: '300px', paddingLeft: '50px' }}>
          <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Womenswear
          </Typography>
          <Typography>Shop our selection of Womenswear</Typography>
        </Grid2>
        <Grid2 xs={4} sx={{ marginBottom: '30px' }}>
          <Image height="300px" src={womensHeader} sx={{
            webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
            maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)'
          }}></Image>   
      </Grid2>
      </Grid2>
      )

}