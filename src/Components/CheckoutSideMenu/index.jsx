import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { XMarkIcon } from '@heroicons/react/24/solid';


import { ShoppingCartContext } from '../../Context';

import OrderCard from '../OrderCard';

import { totalPrice } from '../../utils';

import './CheckoutSideMenu.css';


const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter((product) => product.id !== id);
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.2023',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.setSearchByTitle(null)
  };

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'show': 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white/[090]`}
      >
      <div className='flex justify-between items-center px-6 py-2' >
        <h2 className='font-medium text-xl'>My Order</h2>
        <button
          type='button'
          onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-black-500 font-bold" />
        </button>
      </div>
      <div className='px-6 flex-1'>
        {
          context.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.images}
              price={product.price}
              handleDelete={handleDelete} />
          ))
        }
      </div>
      <div className='px-6'>
        <hr className='py-2'/>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-xl'>${ totalPrice(context.cartProducts) }</span>
        </p>
        <Link to='my-orders/last'>
          <button
            className='bg-black py-2 mb-6 mt-3 w-full text-white rounded-lg'
            type='button'
            onClick={() => handleCheckout() }>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;