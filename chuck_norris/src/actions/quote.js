import * as api from '../api'

// Get quote from server
const getQuote = (category) => async (dispatch) => {
    
    try {

        // Set pending status
        dispatch({ type: 'FETCH_JOKE_PENDING' })
        
        // Get data from server
        const {data} = await api.getQuote(category)

        // Set success status
        dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: data.value})

    }
    catch (error) {
        console.log(error.message)
    }
    
}

export default getQuote