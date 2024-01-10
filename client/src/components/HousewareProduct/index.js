import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import mensHeader from '../../images/houseware_header.jpg'
import Image from 'mui-image';
import { QUERY_HOUSEWARE_PRODUCT } from "../../utils/queries";
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


export default function HousewareProduct() {
    const menuValue = useContext(MenuContext);
    const desktopView = useContext(SizeContext)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const menuDrawers = document.querySelectorAll('.menuDrawer .MuiPaper-root');
    let drawerHeight = ''
    if (menuDrawers.length === 1) {
        drawerHeight = menuDrawers[0].clientHeight;
    }

    const { id } = useParams();
    const { loading, data } = useQuery(QUERY_HOUSEWARE_PRODUCT, {
        variables: { id: id },
    });

    return (
        <>
            <Grid2 container component="main" sx={{
                transition: 'top .65s ease-out, left .65s ease-out',
                width: desktopView.isDesktop ? (menuValue.isMenuOpen ? `calc(100% - 400px)` : `calc(100% - 200px)`) : `100%`,
                left: desktopView.isDesktop ? (menuValue.isMenuOpen ? `400px` : `200px`) : 0,
                overflow: 'hidden',
                top: desktopView.isDesktop ? `0` : !menuValue.isMenuOpen ? `80px` : `calc(30px + ${drawerHeight}px)`,
                height: desktopView.isDesktop ? '' : '100%',
                maxHeight: desktopView.isDesktop ? "100vh" : '',
                overflowY: 'auto',
                alignContent: 'flex-start'
            }}>
                <Grid2 xs={7} sx={{ height: '200px', paddingLeft: '50px' }}>
                    <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Houseware
                    </Typography>
                    <Typography>Shop our selection of Fine Housewares</Typography>
                </Grid2>
                <Grid2 xs={4} sx={{ marginBottom: '30px' }}>
                    <Image height="200px" src={mensHeader} sx={{
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
                                <CardHeader title={data.housewareSingleProd.name} titleTypographyProps={{ style: { fontSize: '1.17em' } }}></CardHeader>
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box sx={{ width: { s: "100%", md: "60%" } }}>
                                        <Image
                                            src={`${data.housewareSingleProd.imageURL}.jpg`}
                                            maxHeight="200px"
                                            shift="right"
                                            distance="100px"
                                            className="productImage"
                                            showLoading
                                            alt={`${data.housewareSingleProd.name} with ${data.housewareSingleProd.attribution}`}
                                        />
                                    </Box>
                                    <Box sx={{ width: { s: "100%", md: "37%" } }}>

                                        <Typography variant='body1' sx={{ paddingTop: '1em' }}>{data.housewareSingleProd.description}</Typography>
                                        <Typography variant='h4' className='price' sx={{ marginTop: '1em' }}>{`$ ${data.housewareSingleProd.price}`}</Typography>

                                        <Box sx={{ margin: '2em', textAlign: 'center' }}>
                                            <Button variant='contained' sx={{ width: '80%' }} onClick={handleClickOpen}>Add to Bag</Button>
                                        </Box>
                                    </Box>


                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                )}
            </Grid2>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Want to purchase this?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        That sounds great but this isn't really for sale. This is a work-in-progress demo project by Mark Gardner. The shopping cart functionality hasn't been implemented yet, but you can still contact Mark by going to the <a href='./#/Contact'>Contact page</a>.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
