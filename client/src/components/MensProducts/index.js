import React from 'react';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { QUERY_MENS } from '../../utils/queries';
import ProductList from "../ProductList";
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import mensHeader from '../../images/menswear_header.jpg'
import Image from 'mui-image';



export default function MensProducts() {
  // Execute the query on component load
  const { loading, data } = useQuery(QUERY_MENS);
  console.log(mensHeader + 'image path')
  // Use optional chaining to check if data exists and if it has a Name property. If not, return an empty array to use.
  const products = data?.Name || [];
  console.log(data + 'check data')

  return (
    <Grid2 container component="main" sx={{ width: `calc(100% - 400px)` }}>
      <Grid2 xs={6} sx={{ height: '300px', paddingLeft: '50px' }}>
        <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Menswear
        </Typography>
        <Typography>Shop our selection of Menswear</Typography>
      </Grid2>
      <Grid2 xs={6} sx={{marginBottom:'30px'}}>
        <Image height="300px" src={mensHeader} sx={{
          webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
          maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)'
        }}></Image>
      </Grid2>
      {/* If the data is still loading, render a loading message  */}
      {loading ? (
        <div xs={12}>Loading...</div>
      ) : (
        <ProductList products={data.mens} />
      )}
    </Grid2>
  );
};
