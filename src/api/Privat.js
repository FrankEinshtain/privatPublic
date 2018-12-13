import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.privatbank.ua/p24api',
  headers: {
    Accept: 'application/json'
  }
})
