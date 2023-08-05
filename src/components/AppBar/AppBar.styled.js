import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF5EE;
  padding-left: 50px;
  padding-right: 50px;
  height: 50px;
`;

export const ContainerLogout = styled.div`
  display: flex;
  gap: 30px;
`;

export const UserName = styled.p`
  font-size: 18px;
  & span {
    color: #1e90ff;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  background-color: transparent;
  border: none;
  &:hover {
    color: #1e90FF;
  }
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  padding: 15px 0;
  &:hover {
    color: #1e90ff;
  }
`;
