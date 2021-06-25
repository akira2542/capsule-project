import axios from 'axios';

let baseURL = 'http://localhost:5000';
export default axios.create({
  baseURL,
});
