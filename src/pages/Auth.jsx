import React, { useContext, useState } from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE)
    } catch (e) {
      // alert(e.response.data.message);
      JSON.stringify(e?.response)
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизація' : 'Регистрація'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Впишіть ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Впишіть ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex flex-row justify-content-between mt-3 px-3 ">
            {isLogin ? (
              <div style={{ width: 'fit-content', padding: '0' }}>
                Немає аккаунта?{' '}
                <Link to={REGISTRATION_ROUTE}>Зареєструйтеся</Link>
              </div>
            ) : (
              <div style={{ width: 'fit-content', padding: '0' }}>
                Є аккаунт? <Link to={LOGIN_ROUTE}>Вхід</Link>
              </div>
            )}
            <Button
              style={{ width: 'fit-content' }}
              variant={'outline-success'}
              onClick={click}
            >
              {isLogin ? 'Вхід' : 'Регістрація'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
