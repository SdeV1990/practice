export default ( state =[], action ) => {

    if (action.type === 'FETCH_JOKE_PENDING') {
        console.log('FETCH_JOKE_PENDING')
        console.log(action.payload)
        return state
    }

    console.log('Unknown action type')
    return state
}