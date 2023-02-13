import React from 'react';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { QUERY_MENS } from '../../utils/queries';
import ProductList from "../ProductList";



export default function MensProducts() {
     // Execute the query on component load
    const { loading, data } = useQuery(QUERY_MENS);
    console.log(data)
    // Use optional chaining to check if data exists and if it has a Name property. If not, return an empty array to use.
    // const products = data?.Name || [];
    // console.log(data)

    return (
        <main>
          <div >
            <div >
                <Typography>Mens</Typography>
              {/* If the data is still loading, render a loading message */}
              {/* {loading ? (
                <div>Loading...</div>
              ) : (
                <ProductList
                 
                />
              )} */}
            </div>
          </div>
        </main>
      );
    };
