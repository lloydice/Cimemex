import React, { useState } from 'react';
import { notification } from 'antd';
import './login.css';
import { createPelicula } from '../request';


const CreateMovie = () => {
  const [name, setName] = useState('');
  const [length, setLenght] = useState('');
  const [classification, setClassification] = useState('');
  const [genre, setGenre] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [starring, setStarring] = useState('');
  const [projection, setProjection] = useState('IMAX3D');
  const [url, setUrl] = useState('');

  const createMovie = () => {
    const newLength = parseInt(length);
    const params = { name, length: newLength, classification, genre, synopsis, starring, projection, url };
    createPelicula(params)
      .then((res) => {
        console.log(res)
        setName('');
        setLenght('');
        setClassification('');
        setGenre('');
        setSynopsis('');
        setStarring('');
        setProjection('IMAX3D');
        setUrl('');
        notification.success({
          message: 'Guardo exitoso!',
          description: 'Película guardada correctamente',
        });
      }).catch((error) => console.log(error));
  };


  return (
    <div style={{ height: "50rem" }}>
      <div style={{ marginTop: "30px", textAlign: "center" }}><h2>Registro de películas</h2></div>
      <div style={{ textAlign: "center" }}>
        <div style={{ marginTop: "50px", marginBottom: "10px" }}>
          <input
            type="text"
            value={name}
            placeholder="Nombre película"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <input
            type="number"
            min={1}
            value={length}
            placeholder="Duración película"
            onChange={(e) => setLenght(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <input
            type="text"
            value={classification}
            placeholder="Clasificación"
            onChange={(e) => setClassification(e.target.value)}
          />
        </div >
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <input
            type="text"
            value={genre}
            placeholder="Genero"
            onChange={(e) => setGenre(e.target.value)}
          />
        </div >
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <input
            type="text"
            value={synopsis}
            placeholder="Sinopsis"
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </div >
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <input
            type="text"
            value={starring}
            placeholder="Reparto"
            onChange={(e) => setStarring(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <input
            type="text"
            value={url}
            placeholder="Imagen URL"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px", marginBottom: "30px" }}>
          <div>
            <select value={projection}
              onChange={(e) => setProjection(e.target.value)}>
              <option value="IMAX3D">IMAX 3D</option>
              <option value="Tradicional">Tradicional</option>
              <option value="4DX">4DX</option>
              <option value="IMAX2D">IMAX 2D</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn"
          onClick={() => createMovie()}
        >
          Guardar
        </button>
      </div>
    </div >

  );
};
export default CreateMovie;