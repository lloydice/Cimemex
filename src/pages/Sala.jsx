import React, { useState, useEffect } from 'react';
import { Steps, Button, message, InputNumber, Spin, Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';

import { getSala } from '../request';
import './login.css';

const { Step } = Steps;
const Option = Select.Option;

const steps = [
  {
    title: 'Boletos',
    content: (props) => {
      const { tickets, setTickets } = props;
      return (
        <div style={{ margin: '50px auto', width: '200px' }}>
          <h3>Cantidad de boletos:</h3>
          <InputNumber min={1} max={5} defaultValue={tickets} onChange={setTickets} />
        </div>
      );
    },
  },
  {
    title: 'Asientos',
    content: (props) => {
      const { sala, selectedSeating, setSelectedSeating, tickets } = props;
      const { noAsiento } = sala;
      let asientos = [];

      const verifySeating = (index) => {
        if (selectedSeating.some(seating => seating === index)) {
          const newSeatings = selectedSeating.filter(seating => seating !== index);
          setSelectedSeating(newSeatings);
        } else {
          if (selectedSeating.length < tickets) {
            setSelectedSeating([...selectedSeating, index]);
          }
        }
      }

      for (let i = 0; noAsiento >= i; i++) {
        const isSelected = selectedSeating.find(seating => seating === i);
        asientos = [...asientos, (<div style={{ display: 'inline-block', margin: '10px' }} onClick={() => verifySeating(i)} key={i}><FontAwesomeIcon size="2x" icon={faCouch} color={isSelected ? "green" : "gray"} /></div>)];
      }

      return (
        <div style={{ textAlign: 'center' }}>
          <div>Seleccionar asientos</div>
          <div style={{ margin: '0 auto', width: '300px' }}>
            {
              asientos
            }
          </div>
          <div style={{ margin: '0 auto', height: '20px', width: '200px', backgroundColor: 'black', color: 'white' }}>Pantalla</div>
        </div>
      );
    },
  },
  {
    title: 'Pago',
    content: (props) => {
      const { tickets, card, setCard } = props;
      const { name = '', cardNumber = '', code = '', month = '', year = '' } = card;
      return (
        <div style={{ margin: '0 auto', width: '300px' }}>
          <div>
            Pago
          </div>
          <div>
            Precio por boleto: $40.00 MXN
          </div>
          <div>
            {`Total boleto(s): ${tickets}`}
          </div>
          <div>
            {`Total a pagar: ${40 * tickets}.00 MXN`}
          </div>
          <div style={{ marginTop: "15px", marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Nombre Tarjetahabiente"
              value={name}
              onChange={e => setCard({ ...card, name: e.target.value })}
            />
          </div>
          <div style={{ marginTop: "15px", marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Número de la tarjeta"
              value={cardNumber}
              onChange={e => setCard({ ...card, cardNumber: e.target.value })}
            />
            <div style={{ marginTop: "15px", marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Código de seguridad"
                value={code}
                onChange={e => setCard({ ...card, code: e.target.value })}
              />
            </div>
            <div style={{ marginTop: "15px", marginBottom: "10px" }}>
              <div>
                Vencimiento
              </div>
            </div>
            <div style={{ marginTop: "5px", marginBottom: "5px" }}>
              <Select defaultValue="Enero" style={{ width: 120 }} onChange={(value) => setCard({ ...card, month: value })}>
                <Option value="Febrero">Febrero</Option>
                <Option value="Marzo">Marzo</Option>
                <Option value="Abril">Abril</Option>
                <Option value="Mayo">Mayo</Option>
                <Option value="Junio">Junio</Option>
                <Option value="Julio">Julio</Option>
                <Option value="Agosto">Agosto</Option>
                <Option value="Septiembre">Septiembre</Option>
                <Option value="Octubre">Octubre</Option>
                <Option value="Noviembre">Noviembre</Option>
                <Option value="Diciembre">Diciembre</Option>
              </Select>
              <Select defaultValue="2019" style={{ width: 120 }} onChange={(value) => setCard({ ...card, year: value })}>
                <Option value="2020">2020</Option>
                <Option value="2021">2021</Option>
                <Option value="2022">2022</Option>
                <Option value="2023">2023</Option>
                <Option value="2024">2024</Option>
                <Option value="2025">2025</Option>
              </Select>
            </div>
          </div>
        </div>
      )
    },
  },
];

const Sala = (props) => {
  const [current, setCurrent] = useState(0);
  const [tickets, setTickets] = useState(1);
  const [sala, setSala] = useState({});
  const [selectedSeating, setSelectedSeating] = useState([]);
  const [card, setCard] = useState({ name: '', cardNumber: '', code: '', month: '', year: '' });
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const { match } = props;
    const { params } = match;
    const { idSala } = params;
    getSala(idSala)
      .then((response) => {
        const [newSala = {}] = response.data;
        setSala(newSala);
      }).catch((error) => console.log(error))
  }, []);

  console.log(card)

  return (
    <div style={{ height: '50rem' }}>
      <Spin spinning={loader} delay={500}>
        <div style={{ marginTop: '50px' }}>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content({ tickets, setTickets, sala, selectedSeating, setSelectedSeating, card, setCard })}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => { setCurrent(current + 1); setSelectedSeating([]); }}>
                Next
            </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" 
              onClick={() => {
                setLoader(true); setTimeout(() => {
                  setLoader(false);
                }, 5000);
              }}>
                Done
            </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => { setCurrent(current - 1); setSelectedSeating([]); }}>
                Previous
            </Button>
            )}
          </div>
        </div>
      </Spin>
    </div>
  )
};

export default Sala;