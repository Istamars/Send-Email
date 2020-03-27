import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.emailjs.com/api',
  contentType: 'application/json'
});
