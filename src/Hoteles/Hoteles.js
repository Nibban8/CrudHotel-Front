import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Toast,
  ToastBody,
  ToastHeader,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import Agregar from './Agregar';

export default function Hoteles() {
  const [data, setData] = useState(null);

  const getHoteles = () => {
    axios
      .get('https://localhost:44368/Api/Hotel/HotelDetails')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteHotel = (id) => {
    axios
      .delete('https://localhost:44368/Api/Hotel/DeleteHotel?id=' + id)
      .then((json) => {
        if (json.data.Status === 'Delete') {
          alert('Record deleted successfully!!');
        }
      });
  };

  useEffect(() => {
    getHoteles();
  }, [data]);

  return (
    <div>
      <Row>
        <Col>
          <h4>Lista de Hoteles</h4>
          {data &&
            data.map((item) => (
              <div key={item.idHotel} className='p-3 my-2 rounded'>
                <Toast>
                  <ToastHeader>{item.Nombre}</ToastHeader>
                  <ToastBody>
                    {`Este es un hotel de ${item.Estrella} estrellas`}
                    <div className='mt-3'>
                      <Button color='primary'>Editar</Button>{' '}
                      <Button
                        onClick={() => deleteHotel(item.IdHotel)}
                        color='danger'
                      >
                        Eliminar
                      </Button>{' '}
                    </div>
                  </ToastBody>
                </Toast>
              </div>
            ))}
        </Col>
        <Col>
          <Agregar></Agregar>
        </Col>
      </Row>
    </div>
  );
}
