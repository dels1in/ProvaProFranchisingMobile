import axios from 'axios'

const api = axios.create({
    baseURL: 'https://processo.profranchising.com.br'
})

export default api;