import { useDispatch, useSelector } from 'react-redux';

import { getIsLoggedIn, getUser } from 'redux/auth/selectorsAuth';
import { logOut } from 'redux/auth/operationAuth';
import  Navigation  from 'components/Navigation';
import  AuthNavigation  from 'components/AuthNavigation';
import { Button, ContainerLogout, Header, UserName } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? (
        <ContainerLogout>
          <UserName>
            Вітаємо, <span>{user.name}</span>
          </UserName>
          <Button type="button" onClick={() => dispatch(logOut())}>
            <span>Вихід</span>
          </Button>
        </ContainerLogout>
      ) : (
        <AuthNavigation />
      )}
    </Header>
  );
};

export default AppBar;