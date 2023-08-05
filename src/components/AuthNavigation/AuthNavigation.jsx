import { Nav } from './AuthNavigation.styled';
import { Link } from 'components/AppBar/AppBar.styled';

const AuthNavigation = () => {
  return (
    <Nav>
      <Link to="/register">Зареєструватися</Link>
      <Link to="/login">Увійти</Link>
    </Nav>
  );
};

export default AuthNavigation;
