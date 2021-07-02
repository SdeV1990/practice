const categories = ( categories=['random'], action ) => {

    // console.log('reducer')
    // console.log(action)

    // Set quote
    if (action.type === 'FETCH_CATEGORIES_SUCCESS') {
        return [...action.payload.data, 'random']
    }

    // console.log('Unknown action type')
    return categories
}

export default categories 
