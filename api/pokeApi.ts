import axios from 'axios';

const pokeApi = axios.create({
  baseURL: '/api',
});

export default pokeApi;
