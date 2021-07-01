import axios from 'axios'

const url = 'https://api.chucknorris.io/jokes/random'

export const getJoke = () => axios.get(url)