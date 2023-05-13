import React, { useContext } from 'react';
import { Context } from '..';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Container } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={SHOP_ROUTE} style={{ color: 'white' }}>
          ROZETKA
        </Link>
        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={'outline-light'}
              className="ms-2"
              onClick={() => logOut() }
            >
              Вийти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              className="ms-2"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Авторизація
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
