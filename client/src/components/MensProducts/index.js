import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useQuery } from '@apollo/client';
import { QUERY_MENS } from '../utils/queries';

export default function MensProducts() {
    const { loading, data } = useQuery(QUERY_MENS);
    const products = data?.Name || [];

    return (
        <main>
          <div className="flex-row justify-center">
            <div className="col-12 col-md-8 mb-3">
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
