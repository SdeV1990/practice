import * as api from '../api'

export const getJoke =  () => async (dispatch) => {
    console.log('getJoke')
    try {
        const { joke } = api.getJoke()

        console.log(joke)

        dispatch({ type: 'FETCH_JOKE_PENDING', payload: joke})
    }
    catch {
        console.log(error.message)
    }
    
}

export default getJoke