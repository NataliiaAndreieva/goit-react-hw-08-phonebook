import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`;

export const Description = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 50px;
`;

export const Link = styled(NavLink)`
  width: 120px;
  text-align: center;
  font-size: 18px;
  border: 2px solid #1e90ff;
  border-radius: 5px;
  padding: 10px 0;
  &:hover {
    color: #000000;
    background-color: #1e90ff;
  }
`;
