import React from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE} from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log('====================================');
  console.log(location);
  console.log('====================================');
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизація' : 'Регистрація'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Впишіть ваш email" />
          <Form.Control className="mt-3" placeholder="Впишіть ваш пароль" />
          <Row className="d-flex flex-row justify-content-between mt-3 px-3 ">
            {isLogin ? (
              <div style={{width: 'fit-content',padding:'0'}}>
                Немає аккаунта?{' '}
                <Link to={REGISTRATION_ROUTE}>
                  Зареєструйтеся
                </Link>
              </div>
            ) : (
              <div style={{width: 'fit-content',padding:'0'}}>
                Є аккаунт?{' '}
                <Link to={LOGIN_ROUTE}>
                  Вхід
                </Link>
              </div>
            )}
            <Button 
            style={{width: 'fit-content'}} 
            variant={'outline-success'}
            >
                {isLogin ?'Вхід': 'Регістрація'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
