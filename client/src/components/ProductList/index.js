import { Paper, Typography, Box } from "@mui/material";
import Image from "mui-image";
import './ProductList.css'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

export default function ProductList({ products }) {
  console.log(products)



  return (
    <>
      <Grid2 container spacing={4} sx={{ justifyContent: 'space-around', padding: '0 50px' }}>
        {products.map((product) => (
          <Grid2 key={product._id} md={12} lg={6} sx={{ display: 'flex', flexWrap: 'wrap', minHeight: '400px', justifyContent: 'space-between', paddingBottom: '50px' }}>
            <Card className='prodCards'>
              <CardHeader title={product.name}></CardHeader>
              <CardContent sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Box sx={{ width: { s: '100%', md: '40%' } }} >
                  <Image src={product.imageURL} maxHeight="200px" shift="right" distance="100px" className='productImage' />
                </Box>
                <Typography variant='body2' sx={{ width: { s: '100%', md: '45%' } }}>{product.description}</Typography>
                {product.size ? (
                  <ul className='sizeList' >
                    <li>XS: {product.size.xs}</li>
                    <li>S: {product.size.s}</li>
                    <li>M: {product.size.m}</li>
                    <li>L: {product.size.l}</li>
                    <li>XL: {product.size.xl}</li>
                  </ul>) : (
                  <Box></Box>
                )}
              </CardContent>
            </Card>
          </Grid2>
        )

        )
        }
      </Grid2>
    </>
  )

}
