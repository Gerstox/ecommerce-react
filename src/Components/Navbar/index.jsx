import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import { getMenuData, buildNavItem } from './NavbarUtils';
import NavItem from '../NavItem';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  let menu1 = getMenuData(1, 0);
  let menu2 = getMenuData(2, context.count);

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        {
          menu1.map(link => (
            link.isCategory ?
            <li
              className={link.className}
              onClick={() => context.setSearchByCategory(link.text?.toLowerCase())}>
              <NavLink
                to={ link.to }
                className={({ isActive }) => isActive ? link.style : undefined }>
                { link.text }
              </NavLink>
            </li>
            :
            <li
              className={link.className}
              onClick={() => context.setSearchByCategory(null)}>
              <NavLink
                to={ link.to }
                className={({ isActive }) => isActive ? link.style : undefined }>
                { link.text }
              </NavLink>
            </li>
          ))
        }
      </ul>

      <ul className='flex items-center gap-3'>
        {
          menu2.map(link => {
            if(link.navItem) {
              return buildNavItem(link)
            } else {
              return (
                <li className={link.className} key={link.text}>
                  <ShoppingBagIcon className='h-5 w-5 text-black-500 font-bold' />
                  {context.cartProducts.length}
                </li>
              )
            }
          })
        }
      </ul>
    </nav>
  );
};

export default Navbar;