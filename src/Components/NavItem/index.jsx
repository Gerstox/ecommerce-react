import { NavLink } from 'react-router-dom';

const NavItem = ({className, to, style, text}) => {
  return (
    <li className={className}>
      <NavLink
        to={ to }
        className={({ isActive }) => isActive ? style : undefined }>
        { text }
      </NavLink>
     </li>
  );
}

export default NavItem;