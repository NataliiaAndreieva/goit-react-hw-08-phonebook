import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 18px;
`;

export const Input = styled.input`
  height: 35px;
  width: 300px;
  font-size: 18px;
  background-color: transparent;
  border: 2px solid #1e90ff;
  border-radius: 5px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;

  font-size: 18px;
`;

export const InfoContact = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  text-align: center;

  width: 100px;
  font-size: 18px;

  background-color: transparent;

  border: 2px solid #1e90ff;
  border-radius: 5px;

  &:hover {
    color: #000000;
    background-color: #1e90ff;
  }
`;


