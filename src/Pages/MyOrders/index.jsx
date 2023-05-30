import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCartContext } from '../../Context';
import OrdersCard from '../../Components/OrdersCard';

function MyOrders() {

  const context = useContext(ShoppingCartContext);

  return (
    <>
    <div className='flex items-center justify-center w-80 relative mb-4'>
      <h1 className='font-medium text-xl'>My Orders</h1>
    </div>
    {
      context.order.map((order, index) => (
        <Link to={`/my-orders/${index}`}>
          <OrdersCard
            key={index + 1}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))
    }
    </>
  )
}

export default MyOrders
