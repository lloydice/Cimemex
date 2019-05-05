import axios from 'axios';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true');

const getPeliculas = () => axios.get('http://localhost:8080/peliculas', { headers });

const getPelicula = id => axios.get(`http://localhost:8080/peliculas/${id}`, { headers });
const login = (email, pass) => axios.post('http://localhost:8080/login', { email, pass }, { headers });

export {
  getPeliculas,
  getPelicula,
  login,
};
