import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = ({ totalPrice, totalProducts }) => {

  return (
    <div className='flex justify-between items-center mb-4 border border-black rounded-lg w-80 p-4'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span>01.02.2023</span>
          <span>{ totalProducts } products</span>
        </p>
        <p className='flex items-center gap-3'>
          <span className='text-xl font-bold'>${ totalPrice }</span>
          <ChevronRightIcon className="h-6 w-6 text-black-500 font-bold" />
        </p>
      </div>
    </div>
  );
}

export default OrdersCard;