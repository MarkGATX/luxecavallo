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


export default function MensProduct() {

    const { id } = useParams();
    const { loading, data } = useQuery(QUERY_MENS_PRODUCT, {
        variables: { id: id },
    });
    // console.log(data.menSingleProd.name)

    return (
        <Grid2 container component="main" sx={{ width: `calc(100% - 400px)`, alignContent:'flex-start' }}>
            <Grid2 xs={7} sx={{ height: '300px', paddingLeft: '50px' }}>
                <Typography variant='h1' sx={{ marginBottom: '50px', paddingTop: '50px' }}>Menswear
                </Typography>
                <Typography>Shop our selection of Menswear</Typography>
            </Grid2>
            <Grid2 xs={4} sx={{ marginBottom: '30px' }}>
                <Image height="300px" src={mensHeader} sx={{
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
                        <Card className='prodCards'
                            sx={{
                                ":hover": {
                                    boxShadow: 4,
                                    scale: "102%",
                                    transition: 'all .5s'
                                },
                            }}
                        >
                            <CardHeader title={data.menSingleProd.name} titleTypographyProps={{ style: { fontSize: '1.17em' } }}></CardHeader>
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box sx={{ width: { s: "100%", md: "40%" } }}>
                                    <Image
                                        src={`${data.menSingleProd.imageURL}@0.25x.jpg`}
                                        maxHeight="200px"
                                        shift="right"
                                        distance="100px"
                                        className="productImage"
                                        showLoading
                                        alt={`${data.menSingleProd.name} with ${data.menSingleProd.attribution}`}
                                    />
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{ width: { s: "100%", md: "45%" } }}
                                >
                                    {data.menSingleProd.description}
                                </Typography>
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
                                    <Box></Box>
                                )}
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            )}
        </Grid2>
    )
}
