import { Paper, Typography, Box } from "@mui/material";
import Image from "mui-image";
import './ProductList.css'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function ProductList ({products}) {
    console.log(products)

    return (
       <>
       <Grid2 container spacing={10} sx={{justifyContent:'space-around', padding:'0 50px'}}>
        {products.map((product) => (           
            <Grid2  key={product._id} md={5} sx={{display:'flex', flexWrap:'wrap', height:'400px', justifyContent:'space-between', paddingBottom:'50px', boxShadow:'rgba(0,0,0,.5) 3px 3px 3px'}}>
               
            <Typography variant='h4' sx={{width:'100%'}}>{product.name}</Typography>
                
              <Image src={product.imageURL} width="auto" height="200px" shift="right" distance="100px" className='productImage' sx={{position:'absolute', left:'-5px'}}/>
              
                <Typography variant='body2' sx={{width:'45%'}}>{product.description}</Typography>
                <ul className='sizeList'>
                    <li>XS: {product.size.xs}</li>
                    <li>S: {product.size.s}</li>
                    <li>M: {product.size.m}</li>
                    <li>L: {product.size.l}</li>
                    <li>XL: {product.size.xl}</li>
                </ul>
             
           
          </Grid2>
        )
        
        )
        }
        </Grid2>
        </>
    )
}
 