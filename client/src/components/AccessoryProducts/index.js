import React from 'react';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { QUERY_ACCESSORY } from '../../utils/queries';
import ProductList from "../ProductList";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import accessoryHeader from '../../images/accessory_header.jpg'
import Image from 'mui-image';
import { SizeContext } from "../../utils/sizeContext";
import { useContext } from 'react';
import { MenuContext } from '../../utils/menuContext';

export default function AccessoryProducts() {
    const menuValue = useContext(MenuContext);
    const desktopView = useContext(SizeContext)

    const menuDrawers = document.querySelectorAll('.menuDrawer .MuiPaper-root');
    let drawerHeight = ''
    if (menuDrawers.length === 1) {
        drawerHeight = menuDrawers[0].clientHeight;
        console.log(`The height of the drawer is ${drawerHeight}px.`);
    } else {
        console.log(`There are ${menuDrawers.length} matching elements.`);
    }

    // Execute the query on component load
    const { loading, data } = useQuery(QUERY_ACCESSORY);
    console.log(data)
    // Use optional chaining to check if data exists and if it has a Name property. If not, return an empty array to use.
    // const products = data?.Name || [];
    // console.log(data)

    return (
        <Grid2 container component="main" sx={{
            transition: 'top 1s ease-in-out, left 1s ease-in-out',
            width: desktopView.isDesktop ? (menuValue.isMenuOpen ? `calc(100% - 400px)` : `calc(100% - 200px)`) : `100%`,
            left: desktopView.isDesktop ? (menuValue.isMenuOpen ? `400px` : `200px`) : 0,
            overflow: 'hidden',
            top: desktopView.isDesktop ? `0` : !menuValue.isMenuOpen ? `80px` : `calc(80px + ${drawerHeight}px)`,
            height: desktopView.isDesktop ? '' : '100%',
            maxHeight: desktopView.isDesktop ? "100vh" : '',
            overflowY: 'auto',
            alignContent: 'flex-start'
        }}>
            <Grid2 xs={6} sx={{ height: '200px', paddingLeft: '50px' }}>
                <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Accessories
                </Typography>
            </Grid2>
            <Grid2 xs={6} sx={{ marginBottom: '30px' }}>
                <Image height="200px" src={accessoryHeader} sx={{
                    webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
                    maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)'
                }}></Image>
            </Grid2>
            {/* If the data is still loading, render a loading message  */}
            {loading ? (
                <Grid2 xs={12} sx={{ paddingLeft: '50px' }}>
                    <div >Loading...</div>
                </Grid2>
            ) : (
                <ProductList products={data.accessories} />
            )}
        </Grid2>
    );
};

