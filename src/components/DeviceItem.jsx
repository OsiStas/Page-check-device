import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { useNavigate} from 'react-router-dom'
import { DEVICET_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()
  return (
    <Col md={3} className='mt-3' onClick={() => navigate(DEVICET_ROUTE + '/' + device?.id)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={process.env.RACT_APP_API_URL + device.img} />
        <div className="text-black-50 ms-1 d-flex justify-content-between aling-items-center">
          <div>Samsung...</div>
          <div className="d-flex aling-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};
export default DeviceItem;
