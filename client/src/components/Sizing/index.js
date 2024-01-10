import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import sizeHeader from '../../images/sizing_header.jpg'
import Image from 'mui-image';
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


export default function Sizing() {
    const menuValue = useContext(MenuContext);
    const desktopView = useContext(SizeContext)
    const menuDrawers = document.querySelectorAll('.menuDrawer .MuiPaper-root');
    let drawerHeight = ''
    if (menuDrawers.length === 1) {
        drawerHeight = menuDrawers[0].clientHeight;
    }


    return (
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
                <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Sizing
                </Typography>
            </Grid2>
            <Grid2 xs={4} sx={{ marginBottom: '30px' }}>
                <Image height="200px" src={sizeHeader} sx={{
                    webkitMaskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)',
                    maskImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 1), transparent)'
                }}></Image>
            </Grid2>
            <Grid2 xs={12} sx={{ paddingLeft: '50px' }}>
                <Typography variant="body1">Use the charts below to find your size. If the measurements for chest and waist match two different sizes, order the size that matches your chest size. All measurements are listed in inches.</Typography>
            </Grid2>
            <Grid2 xs={12} sx={{ paddingLeft: '50px' }}>
                <Typography id="modal-modal-title" variant="h3" component="h3" sx={{ marginBottom: '1em' }}>
                    Men's Sizing Guide
                </Typography>
            </Grid2>
            <Grid2 xs={10} sx={{ paddingLeft: '50px' }}>
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
                                <TableCell align="center">33 - 34.5</TableCell>
                                <TableCell align="center">27 - 28</TableCell>
                                <TableCell align="center">36</TableCell>
                                <TableCell align="center">31</TableCell>
                                <TableCell align="center">30</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell scope="row">S</TableCell>
                                <TableCell align="center">35 - 37</TableCell>
                                <TableCell align="center">29 - 30</TableCell>
                                <TableCell align="center">37</TableCell>
                                <TableCell align="center">31 - 32</TableCell>
                                <TableCell align="center">31</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell scope="row">M</TableCell>
                                <TableCell align="center">38 - 40</TableCell>
                                <TableCell align="center">31 - 33</TableCell>
                                <TableCell align="center">40</TableCell>
                                <TableCell align="center">32 - 33</TableCell>
                                <TableCell align="center">32</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell scope="row">L</TableCell>
                                <TableCell align="center">41 - 43.5</TableCell>
                                <TableCell align="center">34 - 35</TableCell>
                                <TableCell align="center">43</TableCell>
                                <TableCell align="center">34 - 35</TableCell>
                                <TableCell align="center">32.5</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell scope="row">XL</TableCell>
                                <TableCell align="center">44 - 46</TableCell>
                                <TableCell align="center">36 - 37</TableCell>
                                <TableCell align="center">45</TableCell>
                                <TableCell align="center">36 - 37</TableCell>
                                <TableCell align="center">33</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid2>
            <Grid2 xs={12} sx={{ paddingLeft: '50px' }}>
                <Typography id="modal-modal-title" variant="h3" component="h3" sx={{ marginBottom: '1em' }}>
                    Women's Sizing Guide
                </Typography>
            </Grid2>
            <Grid2 xs={10} sx={{ paddingLeft: '50px' }}>
                <TableContainer component={Paper}>
                    <Table aria-label="Womens' sizing guide">
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
                                <TableCell align="center">31</TableCell>
                                <TableCell align="center">23 - 24</TableCell>
                                <TableCell align="center">34 - 35</TableCell>
                                <TableCell align="center">30</TableCell>
                                <TableCell align="center">30</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell scope="row">S</TableCell>
                                <TableCell align="center">32 - 33</TableCell>
                                <TableCell align="center">25 - 26</TableCell>
                                <TableCell align="center">35 - 36</TableCell>
                                <TableCell align="center">30.5</TableCell>
                                <TableCell align="center">30.5</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell scope="row">M</TableCell>
                                <TableCell align="center">34 - 35</TableCell>
                                <TableCell align="center">27 - 28</TableCell>
                                <TableCell align="center">37 - 39</TableCell>
                                <TableCell align="center">31</TableCell>
                                <TableCell align="center">31</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell scope="row">L</TableCell>
                                <TableCell align="center">36 - 37</TableCell>
                                <TableCell align="center">29 - 30</TableCell>
                                <TableCell align="center">40 - 42</TableCell>
                                <TableCell align="center">31.5</TableCell>
                                <TableCell align="center">32</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell scope="row">XL</TableCell>
                                <TableCell align="center">38 - 40</TableCell>
                                <TableCell align="center">30 - 31</TableCell>
                                <TableCell align="center">42 -  43</TableCell>
                                <TableCell align="center">32</TableCell>
                                <TableCell align="center">32</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid2>
        </Grid2>
    );
};
