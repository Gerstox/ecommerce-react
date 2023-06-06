import NavItem from '../NavItem';

const getMenuData = (category=1, count=0) => {
  const activeStyle = 'underline underline-offset-4';
  let menuData;

  switch(category) {
    case 1:
      menuData = [
        {
          className: 'font-semibold text-lg',
          to: '/',
          style: undefined,
          text: 'Shopi',
          navItem: true,
          isCategory: false
        },
        {
          className: '',
          to: '/',
          style: activeStyle,
          text: 'All',
          navItem: true,
          isCategory: false
        },
        {
          className: '',
          to: '/clothes',
          style: activeStyle,
          text: 'Clothes',
          navItem: true,
          isCategory: true
        },
        {
          className: '',
          to: '/electronics',
          style: activeStyle,
          text: 'Electronics',
          navItem: true,
          isCategory: true
        },
        {
          className: '',
          to: '/furnitures',
          style: activeStyle,
          text: 'Furnitures',
          navItem: true,
          isCategory: true
        },
        {
          className: '',
          to: '/toys',
          style: activeStyle,
          text: 'Toys',
          navItem: true,
          isCategory: true
        },
        {
          className: '',
          to: '/others',
          style: activeStyle,
          text: 'Others',
          navItem: true,
          isCategory: true
        },
      ];
    break;
    case 2:
      menuData = [
        {
          className: 'text-black/60',
          to: '',
          style: undefined,
          text: 'gerstox@gmail.com',
          navItem: true,
          isCategory: false
        },
        {
          className: '',
          to: '/my-orders',
          style: activeStyle,
          text: 'My Orders',
          navItem: true,
          isCategory: false
        },
        {
          className: '',
          to: '/my-account',
          style: activeStyle,
          text: 'My Account',
          navItem: true,
          isCategory: false
        },
        {
          className: '',
          to: '/sign-in',
          style: activeStyle,
          text: 'Sign In',
          navItem: true,
          isCategory: false
        },
        {
          className: 'flex justify-between items-center w-9',
          to: '',
          text: 'cart',
          style: undefined,
          navItem: false,
          isCategory: false,
        },
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