import axios from 'axios';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true');

const getPeliculas = () => axios.get('http://localhost:8080/peliculas', { headers });

const getPelicula = id => axios.get(`http://localhost:8080/peliculas/${id}`, { headers });
const login = (email, pass) => axios.post('http://localhost:8080/login', { email, pass }, { headers });
const createPelicula = params => axios.post('http://localhost:8080/peliculas', params, { headers });
const getCartelera = id => axios.get(`http://localhost:8080/peliculas/${id}/cartelera`, { headers });
const getSala = id => axios.get(`http://localhost:8080/salas/${id}`, { headers });

export {
  getPeliculas,
  getPelicula,
  login,
  createPelicula,
  getCartelera,
  getSala,
};
