import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import accessoryHeader from '../../images/accessory_header.jpg'
import Image from 'mui-image';
import { QUERY_ACCESSORY_PRODUCT } from "../../utils/queries";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { SizeContext } from "../../utils/sizeContext";
import { useContext } from 'react';
import { MenuContext } from '../../utils/menuContext';


export default function AccessoryProduct() {
    const menuValue = useContext(MenuContext);
    const desktopView = useContext(SizeContext)
    console.log(desktopView.isDesktop + ' in access')


    const menuDrawers = document.querySelectorAll('.menuDrawer .MuiPaper-root');
    let drawerHeight = ''
    if (menuDrawers.length === 1) {
        drawerHeight = menuDrawers[0].clientHeight;
        console.log(`The height of the drawer is ${drawerHeight}px.`);
    } else {
        console.log(`There are ${menuDrawers.length} matching elements.`);
    }

    const { id } = useParams();
    const { loading, data } = useQuery(QUERY_ACCESSORY_PRODUCT, {
        variables: { id: id },
    });
    // console.log(data.accessorySingleProd.name)

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
            <Grid2 xs={7} sx={{ height: '200px', paddingLeft: '50px' }}>
                <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Accessories
                </Typography>

            </Grid2>
            <Grid2 xs={4} sx={{ marginBottom: '30px' }}>
                <Image height="200px" src={accessoryHeader} sx={{
                    webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
                    maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)'
                }}></Image>
            </Grid2>
            {loading ? (
                <div xs={12}>Loading...</div>
            ) : (
                <Grid2
                    container
                    xs={12}
                    sx={{ justifyContent: "space-around", margin: "0 50px" }}
                >

                    <Grid2
                        xs={12}
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            minHeight: "500px",
                            justifyContent: "space-between",
                            paddingBottom: "50px",
                        }}
                    >
                        <Card sx={{ width: '100%' }}>
                            <CardHeader title={data.accessorySingleProd.name} titleTypographyProps={{ style: { fontSize: '1.17em' } }}></CardHeader>
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box sx={{ width: { s: "100%", md: "60%" } }}>
                                    <Image
                                        src={`${data.accessorySingleProd.imageURL}.jpg`}
                                        maxHeight="200px"
                                        shift="right"
                                        distance="100px"
                                        className="productImage"
                                        showLoading
                                        alt={`${data.accessorySingleProd.name} with ${data.accessorySingleProd.attribution}`}
                                    />
                                </Box>
                                <Box sx={{ width: { s: "100%", md: "37%" } }}>

                                    <Typography variant='body1' sx={{paddingTop:'1em'}}>{data.accessorySingleProd.description}</Typography>
                                    <Typography variant='h4' className='price' sx={{ marginTop: '1em' }}>{`$ ${data.accessorySingleProd.price}`}</Typography>
                                    <Box sx={{ margin: '2em', textAlign: 'center' }}>
                                        <Button variant='contained' sx={{ width: '80%' }}>Add to Bag</Button>
                                    </Box>




                                </Box>


                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            )}
        </Grid2>
    )
}
