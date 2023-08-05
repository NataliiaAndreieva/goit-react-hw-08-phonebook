import  AppBar  from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
