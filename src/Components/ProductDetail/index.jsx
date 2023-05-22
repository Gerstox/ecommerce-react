import { useContext } from 'react';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { PlusIcon } from '@heroicons/react/24/solid';

import { ShoppingCartContext } from '../../Context';

import './ProductDetail.css';


const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'show': 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
      >
      <div className='flex justify-between items-center px-6 py-2'  >
        <h2 className='font-medium text-xl'>Detail</h2>
        <button
          type='button'
          onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black-500 font-bold" />
        </button>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.images ? context.productToShow.images[0]: ''}
          alt={context.productToShow.title} />
      </figure>
      <p className='relative flex flex-col m-6'>
        <span className='font-medium text-2xl mb-3'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
        <button
          className='absolute top-0 right-0 flex justify-between items-center bg-black text-white w-fit rounded-lg py-1 px-3'
          onClick={() => context.setCount(context.count + 1)}>
            Agregar
            <PlusIcon className='h-6 w-6 text-black-500 font-bold ml-2' />
        </button>
      </p>
    </aside>
  );
}

export default ProductDetail;