import axios from 'axios'

const url = 'https://api.chucknorris.io/jokes/'


// Get joke by category or random
export const getQuote = (category) => axios.get(url + ( category && category !== 'random' ? `random?category=${category}` : 'random') )

// Get categories
export const getCategories = () => axios.get(url + 'categories')