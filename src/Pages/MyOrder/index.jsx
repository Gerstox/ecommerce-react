// import './MyOrder.css'
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { ChevronLeftIcon } from '@heroicons/react/24/solid';

import { ShoppingCartContext } from "../../Context";

import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const pathSplit = window.location.pathname.split('/');
  let orderId = pathSplit[pathSplit.length - 1];
  orderId = orderId === 'last' ? (context.order?.length -1) : orderId;
  const order = context.order[orderId];

  return (
    <>
      <div className='flex items-center justify-center w-80 relative mb-6'>
        <Link to={'/my-orders'} className='absolute left-0'>
          <ChevronLeftIcon className="h-6 w-6 text-black-500 font-bold" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex-col w-80'>
        {
          order.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.images}
              price={product.price}/>
          ))
        }
      </div>
    </>
  )
}

export default MyOrder
