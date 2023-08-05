import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/selectorsAuth';
import { Link } from 'components/AppBar/AppBar.styled';
import { Logo, Nav } from './Navigation.styled';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Nav>
        <NavLink to="/" title="Home">
          <Logo>Контакти</Logo>
        </NavLink>
        <Link to="/" title="Home">
          <span>Головна</span>
        </Link>
        {isLoggedIn && (
          <Link to="/contacts">
            <span>Контакти</span>
          </Link>
        )}
      </Nav>
    </>
  );
};

export default Navigation;
