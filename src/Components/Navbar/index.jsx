import { ShoppingCartContext } from '../../Context';
import { getMenuData, buildNavItem } from './NavbarUtils';
import { useContext } from 'react';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  let menu1 = getMenuData(1, 0);
  let menu2 = getMenuData(2, context.count);

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        {
          menu1.map(link => buildNavItem(link))
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
                  {link.text}
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