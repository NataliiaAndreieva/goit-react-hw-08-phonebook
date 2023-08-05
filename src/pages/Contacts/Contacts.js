import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import  ContactForm  from 'components/ContactForm';
import  ContactList  from 'components/ContactList';
import  Filter  from 'components/Filter';
import Section  from 'components/Section';
import { ContactsContainer } from './Contacts.styled';

const Contacts = () => {
  const { isLoading, error } = useSelector(getContacts);
  return (
    <ContactsContainer>
      <Section title={'Додати контакт'}>
        <ContactForm />
      </Section>
      {isLoading && !error && <b>Запит виконується...</b>}
      <Section title={'Мої контакти'}>
        <Filter />
        <ContactList />
      </Section>
    </ContactsContainer>
  );
};

export default Contacts;
