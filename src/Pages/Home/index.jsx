// import './Home.css'
import { useContext } from 'react';

import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

function Home() {

  const context = useContext(ShoppingCartContext);

  const renderView = () => {
      if (context.filteredProducts?.length > 0) {
        return (
          context.filteredProducts?.map(
            (product) => (
              <Card
                key={product.id}
                data={product}
              />
            )
          )
        )
      } else if (!context.filteredProducts) {
        return (
          context.products?.map(
            (product) => (
              <Card
                key={product.id}
                data={product}
              />
            )
          )
        )
      } else {
        return (
          <div>We don't have anything :(</div>
        )
      }
  };

  return (
    <>
      <div className='flex items-center justify-center w-80 relative mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        type='text'
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 px-4 py-2 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </>
  )
}

export default Home
