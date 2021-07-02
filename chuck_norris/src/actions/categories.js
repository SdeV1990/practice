import * as api from '../api'

// Get categories from server
const getCategories = () => async (dispatch) => {
    
    try {

        // Set pending status
        dispatch({ type: 'FETCH_CATEGORIES_PENDING' })
        
        // Get categories from server
        const categories = await api.getCategories()

        // Set success status
        dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: categories })

    }
    catch (error) {
        console.log(error.message)
    }
    
}

export default getCategories