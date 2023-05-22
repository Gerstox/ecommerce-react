import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/solid';

const Card = ({ data }) => {

  const context = useContext(ShoppingCartContext);

  const showProduct = (product) => {
    context.setProductToShow(product);
    context.openProductDetail();
  }

  const onClick = (event) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data.images[0]}
          alt={data.title}/>
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={onClick}>
          <PlusIcon className="h-6 w-6 text-black-500 font-bold" />
        </button>
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-sm font-light capitalize'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
