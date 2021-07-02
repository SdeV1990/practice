const categories = ( categories=['random'], action ) => {

    // Set quote
    if (action.type === 'FETCH_CATEGORIES_SUCCESS') {
        return [...action.payload.data, 'random']
    }

    return categories
}

export default categories 
