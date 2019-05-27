import React, { useState, useEffect } from 'react';
import './ticket.css';
import { getTicket, getCarteleraById, getPelicula, getSala } from '../request';

const Ticket = (props) => {
  const [ticket, setTicket] = useState({});
  const [pelicula, setPelicula] = useState({});
  const [sala, setSala] = useState({});
  const [cartelera, setCartelera] = useState({});

  useEffect(() => {
    const { match } = props;
    const { params } = match;
    const { idTicket } = params;
    getTicket(idTicket)
      .then((response) => {
        const [newTicket = {}] = response.data;
        getCarteleraById(newTicket.cartelera)
          .then((carteleraResp) => {
            const [newcartelera = {}] = carteleraResp.data;
            getPelicula(newcartelera.pelicula)
              .then((peliculaResp) => {
                const [newPelicula = {}] = peliculaResp.data;
                getSala(newcartelera.sala)
                  .then((salaResp) => {
                    const [newSala = {}] = salaResp.data;
                    setPelicula(newPelicula);
                    setSala(newSala);
                    setTicket(newTicket);
                    setCartelera(newcartelera);
                  }).catch((error) => console.log(error))
              }).catch((error) => console.log(error))
          }).catch((error) => console.log(error))
      }).catch((error) => console.log(error))
  }, []);

  const { nombre_comprador = '', folio = '', numero_asiento = [] } = ticket;
  const { nombre = '' } = pelicula;
  const { noSala } = sala;
  const { horario } = cartelera;

  return (
    <div style={{ height: '50rem' }}>
      <div className="container first">
        <div className="top left corner"></div>
        <div className="top right corner"></div>
        <div className="bottom left corner"></div>
        <div className="bottom right corner"></div>
        <div className="spacer">
          <img style={{ height: '60px' }} src="https://i.ibb.co/4NLWY1T/cimemex-logo.png" />
          <div className="name-flight">
            <h3>{nombre_comprador}</h3>
            <h4>Folio: <span>{folio}</span></h4>
          </div>
          <div className="destination">
            <div className="from">
              <h1>{nombre}</h1>
            </div>
          </div>
          <div className="details">
            <div className="left-side">
              <h5>Sala:<br /><span>{noSala}</span></h5>
              <h5>Asientos:<br />{numero_asiento.map(asiento => <span>{asiento},</span>)}</h5>
            </div>
            <div className="right-side">
              <h5>Hora:<br /><span>{horario}</span></h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container second">
        <div className="top left"></div>
        <div className="top right"></div>
        <div className="bottom left"></div>
        <div className="bottom right"></div>
        <div className="spacer2">
          <h3>{nombre_comprador}</h3>
          <div className="text-barcode">
            <div className="flight-gate">
              <h5>Folio: <span>{folio}</span></h5>
              <h5>Sala: <span>{noSala}</span></h5>
            </div>
            <img src="https://p1.picsto.re/jXKTO.jpg" />>
	    	</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
