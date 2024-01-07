import { Typography, Box } from "@mui/material";
import Image from "mui-image";
import "./ProductList.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";



export default function ProductList({ products }, { in: inProp }) {
  const app = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.from(".prodCards", { opacity: 0, x: '100px', stagger: .2 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <Grid2
      ref={app}
      container
      spacing={4}
      sx={{ justifyContent: "space-around", margin: "0 50px" }}>
      {products.map((product) => (
        <Grid2
          key={product._id}
          md={12}
          lg={6}
          xl={4}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minHeight: product.size ? '600px' : '450px',
            justifyContent: "space-between",
            paddingBottom: "50px",
          }}>
          <Link to={`/${product.category}/${product._id}`} underline='none' >
            <Card className='prodCards'
              sx={{
                minHeight: product.size ? '600px' : '550px',
                ":hover": {
                  boxShadow: 4,
                },
              }}>
              <CardHeader title={product.name} titleTypographyProps={{ style: { fontSize: '1.17em' } }}></CardHeader>
              <CardContent
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  height: '100%'
                }}>
                <Box sx={{ width: { xs: "100%" } }}>
                  <Image
                    src={`${product.imageURL}@0.25x.jpg`}
                    maxHeight="200px"
                    shift="right"
                    distance="100px"
                    className="productImage"
                    showLoading
                    width='100%'
                    height='auto'
                    alt={`${product.name} with ${product.attribution}`}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ width: { s: "100%" }, paddingTop: '1em' }}>
                  {product.description}
                </Typography>
                {product.size ? (
                  <ul className="sizeList" >
                    {(product.size.xs <= 3) || (product.size.s <= 3) || (product.size.m <= 3) || (product.size.l <= 3) || (product.size.xl <= 3) ? (<li><Alert severity="error">Low stock:
                      {product.size.xs <= 3 ? <Typography variant='body1' sx={{ display: 'inline' }}> XS, </Typography> : <></>}
                      {product.size.s <= 3 ? <Typography variant='body1' sx={{ display: 'inline' }}> S, </Typography> : <></>}
                      {product.size.m <= 3 ? <Typography variant='body1' sx={{ display: 'inline' }}> M, </Typography> : <></>}
                      {product.size.l <= 3 ? <Typography variant='body1' sx={{ display: 'inline' }}> L, </Typography> : <></>}
                      {product.size.xl <= 3 ? <Typography variant='body1' sx={{ display: 'inline' }}> XL. </Typography> : <></>}
                    </Alert>
                    </li>) : (<li></li>)}
                  </ul>
                ) : (
                  <Box></Box>
                )}
              </CardContent>
            </Card>
          </Link>
        </Grid2>
      ))}
    </Grid2>

  );
}
