import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Components
import Header from './components/Header/Header'
import Main from './components/Main/Main'

// Actions
import getQuote from './actions/quote'

const App = () => {

    // Make a request for a quote from server
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getQuote())
    }, [dispatch])

    return (
        <div className='wrapper'>
            <Header/>
            <Main/>
        </div>
    );
}

export default App