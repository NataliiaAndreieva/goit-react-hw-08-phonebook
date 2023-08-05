import { useDispatch, useSelector } from 'react-redux';

import { register } from 'redux/auth/operationAuth';
import { getError } from 'redux/auth/selectorsAuth';
import  {getNotification}  from 'components/helped/getNotification';
import { Container } from 'components/HomeDescription/HomeDescription.styled';
import { Button, Form, Input, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    if (password.value.length < 7) {
      getNotification(
        `Пароль має бути хоча б з 7 символів.`
      );
      return;
    }

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Ім'я
          <Input type="text" name="name" min="6" />
        </Label>
        <Label>
          Пошта
          <Input type="text" name="email" />
        </Label>
        <Label>
          Пароль
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Реєстрація</Button>
      </Form>
      {error?.response?.data?.name &&
        getNotification('Ця пошта вже зареєстрована')}
    </Container>
  );
};

export default RegisterForm;
