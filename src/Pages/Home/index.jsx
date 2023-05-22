// import './Home.css'
import { useState, useEffect } from 'react';

import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

import { apiUrl } from '../../Api';

function Home() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setProducts(data);
      } catch(error) {
        console.error(`Ooops! ocurrio un error: ${error}`);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          products?.map(
            (product) => (
              <Card
                key={product.id}
                data={product}
              />
            )
          )
        }
      </div>
      <ProductDetail />
    </>
  )
}

export default Home
