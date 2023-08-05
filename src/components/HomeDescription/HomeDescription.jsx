import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/selectorsAuth';
import Section  from 'components/Section';
import { Container, Description, Link, Nav } from './HomeDescription.styled';

const HomeDescription = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <div>
        <Section title={'Вітаю у книзі контактів'}>
          <Description>
            Вітаю! Тут ви можете безпечно зберігати свої контакти.
          </Description>
          {isLoggedIn ? (
            <Description>Дякую, що ви з нами!</Description>
          ) : (
            <>
              <Description>
                Щоб почати ви можете зареєструватися або залогінитися!
              </Description>
              <Nav>
                <Link to="/register">Реєстрація</Link>
                <Link to="/login">Увійти</Link>
              </Nav>
            </>
          )}
        </Section>
      </div>
    </Container>
  );
};

export default HomeDescription;
