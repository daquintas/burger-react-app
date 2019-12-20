import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-ba142.firebaseio.com/'
});

export default instance;
