import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import star from '../assets/star.png';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'x4 gt',
    price: 15000,
    rating: 5,
    img: 'https://hotline.ua/img/tx/349/3498057985.jpg',
  };
  return (
    <Container className="mt-3">
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
              fontSize: 64 ,
            }}
          >
            {device.rating}
          </div>
        </Row>
      </Col>
      <Col md={4}></Col>
    </Container>
  );
};

export default DevicePage;
