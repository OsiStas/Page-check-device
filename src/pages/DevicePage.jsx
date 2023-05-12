import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import star from '../assets/star.png';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'x4 gt',
    price: 15000,
    rating: 5,
    img: 'https://hotline.ua/img/tx/349/3498057985.jpg',
  };
  const description = [
    {id:1, title: 'Оперативна память' , description: ' 16 гб'},
    {id:2, title: 'Камера' , description: ' 64 мп'},
    {id:3, title: 'Процесор' , description: ' Райзен 5 3660'},
    {id:4, title: 'Кількість ядер в процесорі' , description: ' 16'},
    {id:5, title: 'Аккумулятор' , description: ' 4000mAh'},
  ]
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column aling-items-center">
            <h2>{device.name} </h2>
            <div
              className="d-flex aling-items-center justify-content-center"
              style={{
                background: `url(${star})no-repeat center center`,
                width: 240,
                height: 240,
                paddingTop: 70,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column aling-items-center justify-content-around px-5"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>Від: {device.price} ГРН.</h3>
            <Button variant={'outline-dark'}>Додати в кошик</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column mt-3'>
        <h1>Характеристикі</h1>
        {description.map((info, index) =>
            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 , }}>
                {info.title}:{info.description}
            </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;
