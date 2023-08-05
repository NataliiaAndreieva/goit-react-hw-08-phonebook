import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

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

export const Button = styled.button`
  text-align: center;

  width: 120px;
  font-size: 18px;

  background-color: transparent;

  border: 2px solid #1e90ff;
  border-radius: 5px;

  padding: 10px 0;

  &:hover {
    color: #000000;
    background-color: #1e90ff;
  }
`;

