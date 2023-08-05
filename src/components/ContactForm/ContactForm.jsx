import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { getNotification } from 'components/helped/getNotification';
import {
  Button,
  Form,
  Input,
  Label,
} from 'components/RegisterForm/RegisterForm.styled';

function ContactForm() {
  const { contactsItem } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;

    const newContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    if (contactsItem.some(contact => contact.name === name.value)) {
      getNotification(`${name.value} уже є у контактах.`);
    } else {
      dispatch(addContact(newContact));
    }
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Ім'я
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Номер
        <Input
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Додати контакт</Button>
    </Form>
  );
}

export default ContactForm;
