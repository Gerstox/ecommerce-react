import { ShoppingBagIcon } from '@heroicons/react/24/solid';

import NavItem from '../NavItem';

const getShoppingCartIcon = (count) => (
  <>
    <ShoppingBagIcon className='h-5 w-5 text-black-500 font-bold' />
    {count}
  </>
);

const getMenuData = (category=1, count=0) => {
  const activeStyle = 'underline underline-offset-4';
  let menuData;

  switch(category) {
    case 1:
      menuData = [
        {className: 'font-semibold text-lg', to: '/', style: undefined, text: 'Shopi', navItem: true},
        {className: '', to: '/', style: activeStyle, text: 'All', navItem: true},
        {className: '', to: '/clothes', style: activeStyle, text: 'Clothes', navItem: true},
        {className: '', to: '/electronics', style: activeStyle, text: 'Electronics', navItem: true},
        {className: '', to: '/furnitures', style: activeStyle, text: 'Furnitures', navItem: true},
        {className: '', to: '/toys', style: activeStyle, text: 'Toys', navItem: true},
        {className: '', to: '/others', style: activeStyle, text: 'Others', navItem: true},
      ];
    break;
    case 2:
      menuData = [
        {className: 'text-black/60', to: '', style: undefined, text: 'gerstox@gmail.com', navItem: false},
        {className: '', to: '/my-orders', style: activeStyle, text: 'My Orders', navItem: true},
        {className: '', to: '/my-account', style: activeStyle, text: 'My Account', navItem: true},
        {className: '', to: '/sign-in', style: activeStyle, text: 'Sign In', navItem: true},
        {className: 'flex justify-between items-center w-9', to: '', style: undefined, text: getShoppingCartIcon(count), navItem: false},
      ];
    break;
  }
  return menuData;
}

const buildNavItem = (link) => (
  <NavItem
    className={link.className}
    to={link.to}
    style={link.style}
    text={link.text}
    key={link.text}
  />
);

export { getMenuData, buildNavItem }