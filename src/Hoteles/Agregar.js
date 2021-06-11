import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

export default function Agregar() {
  const [datos, setDatos] = useState({ nombre: '', estrellas: '' });

  const Addhotel = () => {
    axios
      .post('https://localhost:44368/Api/Hotel/AddOrUpdateHotel/', {
        Nombre: datos.nombre,
        Estrella: datos.estrellas,
      })
      .then((json) => {
        if (json.data.Status === 'Success') {
          console.log(json.data.Status);
          alert('Data Saved Successfully');
        } else {
          alert('Data not Saved');
        }
      });
  };

  return (
    <div>
      <h4 className='mb-4'>Agregar Hotel</h4>
      <Form className='form'>
        <FormGroup row>
          <Label for='Nombre' sm={2}>
            Nombre
          </Label>
          <Col sm={10}>
            <Input
              type='text'
              name='Nombre'
              onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
              value={datos.nombre}
              placeholder='Nombre'
            />
          </Col>
        </FormGroup>
        <FormGroup row className='mt-2'>
          <Label for='Estrella' sm={2}>
            Estrella
          </Label>
          <Col sm={10}>
            <Input
              type='text'
              name='Estrella'
              onChange={(e) =>
                setDatos({ ...datos, estrellas: e.target.value })
              }
              value={datos.estrellas}
              placeholder='Estrellas'
            />
          </Col>
        </FormGroup>

        <div className='mt-4'>
          <button
            type='button'
            onClick={Addhotel}
            className='btn btn-success me-3'
          >
            Submit
          </button>
          <Button color='danger'>Cancel</Button>{' '}
        </div>
      </Form>
    </div>
  );
}
