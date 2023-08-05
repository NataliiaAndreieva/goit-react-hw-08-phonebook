import {
  Button,
  Form,
  Input,
  Label,
} from 'components/RegisterForm/RegisterForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operationAuth';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          Пошта
          <Input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Пароль
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Увійти</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
