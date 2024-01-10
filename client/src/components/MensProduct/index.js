import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import mensHeader from '../../images/menswear_header.jpg'
import Image from 'mui-image';
import { QUERY_MENS_PRODUCT } from "../../utils/queries";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { SizeContext } from "../../utils/sizeContext";
import { useContext } from 'react';
import { MenuContext } from '../../utils/menuContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MensProduct() {
    const menuValue = useContext(MenuContext);
    const desktopView = useContext(SizeContext)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
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
    const { loading, data } = useQuery(QUERY_MENS_PRODUCT, {
        variables: { id: id },
    });
    const [sizeOpen, setSizeOpen] = useState(false);
    const handleSizeOpen = () => setSizeOpen(true);
    const handleSizeClose = () => setSizeOpen(false);

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
                    <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Menswear
                    </Typography>

                </Grid2>
                <Grid2 xs={4} sx={{ marginBottom: '30px' }}>
                    <Image height="200px" src={mensHeader} sx={{
                        objectPosition: 'top',
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
                                <CardHeader title={data.menSingleProd.name} component='h2' ></CardHeader>
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box sx={{ width: { s: "100%", md: "60%" } }}>
                                        <Image
                                            src={`${data.menSingleProd.imageURL}.jpg`}
                                            maxHeight="200px"
                                            shift="right"
                                            distance="100px"
                                            className="productImage"
                                            showLoading
                                            alt={`${data.menSingleProd.name} with ${data.menSingleProd.attribution}`}
                                        />
                                    </Box>
                                    <Box sx={{ width: { s: "100%", md: "37%" }, padding: '1em' }}>

                                        <Typography variant='body1' sx={{ paddingTop: '1em' }}>{data.menSingleProd.description}</Typography>
                                        <Typography variant='h4' className='price' sx={{ marginTop: '1em' }}>{`$ ${data.menSingleProd.price}`}</Typography>

                                        <Typography variant='h4' sx={{ marginTop: '1em' }}>Sizes</Typography>
                                        <ul className="sizeList" >
                                            {data.menSingleProd.size.xs === 0 ? (<li className='sizeButton'><Button variant='contained' disabled >XS</Button></li>) : (<li className='sizeButton' ><Button variant='contained' onClick={handleOpen}>XS</Button></li>)}
                                            {data.menSingleProd.size.s === 0 ? (<li className='sizeButton' ><Button variant='contained' disabled>S</Button></li>) : (<li className='sizeButton'><Button variant='contained' onClick={handleOpen}>S</Button></li>)}
                                            {data.menSingleProd.size.m === 0 ? (<li className='sizeButton'><Button variant='contained' disabled >M</Button></li>) : (<li className='sizeButton'><Button variant='contained' onClick={handleOpen}>M</Button></li>)}
                                            {data.menSingleProd.size.l === 0 ? (<li className='sizeButton'><Button variant='contained' disabled>L</Button></li>) : (<li className='sizeButton'><Button variant='contained' onClick={handleOpen}>L</Button></li>)}
                                            {data.menSingleProd.size.xl === 0 ? (<li className='sizeButton'><Button variant='contained' disabled >XL</Button></li>) : (<li className='sizeButton'><Button variant='contained' onClick={handleOpen}>XL</Button></li>)}
                                        </ul>
                                        {data.menSingleProd.size ? (
                                            <ul className="sizeList" >
                                                {(data.menSingleProd.size.xs <= 3) || (data.menSingleProd.size.s <= 3) || (data.menSingleProd.size.m <= 3) || (data.menSingleProd.size.l <= 3) || (data.menSingleProd.size.xl <= 3) ? (<li><Alert severity="error">Low stock:
                                                    {data.menSingleProd.size.xs <= 3 ? <Typography variant='body1' sx={{ display: 'inline' }}> XS, </Typography> : <></>}
                                                    {data.menSingleProd.size.s <= 3 ? <Typography variant='body1' sx={{ display: 'inline' }}> S, </Typography> : <></>}
                                                    {data.menSingleProd.size.m <= 3 ? <Typography variant='body1' sx={{ display: 'inline' }}> M, </Typography> : <></>}
                                                    {data.menSingleProd.size.l <= 3 ? <Typography variant='body1' sx={{ display: 'inline' }}> L, </Typography> : <></>}
                                                    {data.menSingleProd.size.xl <= 3 ? <Typography variant='body1' sx={{ display: 'inline' }}> XL. </Typography> : <></>}
                                                </Alert>
                                                </li>) : (<li></li>)}

                                            </ul>
                                        ) : (
                                            <Box></Box>)}
                                        <Box sx={{ margin: '2em', textAlign: 'center' }}>
                                            <Button variant='contained' sx={{ width: '80%' }} onClick={handleOpen}>Add to Bag</Button>
                                        </Box>
                                        <Typography variant='body1' sx={{ textDecoration: 'underline', cursor: 'pointer', marginBottom: '1em' }} onClick={() => handleSizeOpen()}>Sizing Guide</Typography>
                                        <Typography variant='h4' >Care</Typography>
                                        <Typography variant='body1'>{data.menSingleProd.care}</Typography>
                                    </Box>


                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                )}
            </Grid2>
            <Modal
                open={sizeOpen}
                onClose={handleSizeClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h3" sx={{ marginBottom: '1em' }}>
                        Men's Sizing Guide
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="Mens' sizing guide">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'tertiary.main' }}>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Size</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="center">Chest</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="center">Waist</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="center">Seat</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="center">Arm</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }} align="center">Inseam</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell scope="row">XS</TableCell>
                                    <TableCell align="center">33-34.5</TableCell>
                                    <TableCell align="center">27-28</TableCell>
                                    <TableCell align="center">36</TableCell>
                                    <TableCell align="center">31</TableCell>
                                    <TableCell align="center">30</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell scope="row">S</TableCell>
                                    <TableCell align="center">35-37</TableCell>
                                    <TableCell align="center">29-30</TableCell>
                                    <TableCell align="center">37</TableCell>
                                    <TableCell align="center">31-32</TableCell>
                                    <TableCell align="center">31</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell scope="row">M</TableCell>
                                    <TableCell align="center">38-40</TableCell>
                                    <TableCell align="center">31-33</TableCell>
                                    <TableCell align="center">40</TableCell>
                                    <TableCell align="center">32-33</TableCell>
                                    <TableCell align="center">32</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell scope="row">L</TableCell>
                                    <TableCell align="center">41-43.5</TableCell>
                                    <TableCell align="center">34-35</TableCell>
                                    <TableCell align="center">43</TableCell>
                                    <TableCell align="center">34-35</TableCell>
                                    <TableCell align="center">32.5</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell scope="row">XL</TableCell>
                                    <TableCell align="center">44-46</TableCell>
                                    <TableCell align="center">36-37</TableCell>
                                    <TableCell align="center">45</TableCell>
                                    <TableCell align="center">36-37</TableCell>
                                    <TableCell align="center">33</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Modal>
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
