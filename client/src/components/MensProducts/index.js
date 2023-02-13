
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { QUERY_MENS } from '../../utils/queries';
import ProductList from "../ProductList";


export default function MensProducts() {
    const { loading, data } = useQuery(QUERY_MENS);
    const products = data?.Name || [];
    console.log(data)

    return (
        <main>
          <div >
            <div >
                <Typography>Mens</Typography>
              {/* If the data is still loading, render a loading message */}
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ProductList
                  products={products}
                  title="Some Feed for Thought(s)..."
                />
              )}
            </div>
          </div>
        </main>
      );
    };
