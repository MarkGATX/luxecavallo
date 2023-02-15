import React from 'react';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { QUERY_WOMENS } from '../../utils/queries';
import ProductList from "../ProductList";
import Box from '@mui/material/Box';

export default function WomensProducts() {
     // Execute the query on component load
    const { loading, data } = useQuery(QUERY_WOMENS);
    console.log(data)
    // Use optional chaining to check if data exists and if it has a Name property. If not, return an empty array to use.
    // const products = data?.Name || [];
    // console.log(data)

    return (
        <Box  component="main"  sx={{width:`calc(100% - 400px)`}}>
          <Box xs={12} sx={{height:'300px', paddingLeft:'50px'}}>
            <Typography variant='h1' sx={{marginBottom:'50px', paddingTop:'50px' }}>Womenswear
            </Typography>
            <Typography>Shop our selection of Womenswear</Typography>
            </Box>
              {/* If the data is still loading, render a loading message  */}
               {loading ? (
                <div xs={12}>Loading...</div>
              ) : (
                <ProductList products={data.womens} />
              )}
        </Box>
      );
    };

