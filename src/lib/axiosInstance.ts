import axios from 'axios';
const baseURL =
  'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io';

export const api = axios.create({
  baseURL,
  headers: { Authorization: 'Bearer HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF' }
});
