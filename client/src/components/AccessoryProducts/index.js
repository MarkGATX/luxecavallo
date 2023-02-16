import React from 'react';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { QUERY_ACCESSORY } from '../../utils/queries';
import ProductList from "../ProductList";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import accessoryHeader from '../../images/accessory_header.jpg'
import Image from 'mui-image';

export default function AccessoryProducts() {
    // Execute the query on component load
    const { loading, data } = useQuery(QUERY_ACCESSORY);
    console.log(data)
    // Use optional chaining to check if data exists and if it has a Name property. If not, return an empty array to use.
    // const products = data?.Name || [];
    // console.log(data)

    return (
        <Grid2 component="main" sx={{ width: `calc(100% - 400px)` }}>
            <Grid2 xs={6} sx={{ height: '300px', paddingLeft: '50px' }}>
                <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Accessories
                </Typography>
                <Typography>Every good outfit needs good accessories.</Typography>
            </Grid2>
            <Grid2 xs={6} sx={{ marginBottom: '30px' }}>
                <Image height="300px" src={accessoryHeader} sx={{
                    webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
                    maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)'
                }}></Image>
            </Grid2>
            {/* If the data is still loading, render a loading message  */}
            {loading ? (
                <div xs={12}>Loading...</div>
            ) : (
                <ProductList products={data.accessories} />
            )}
        </Grid2>
    );
};

