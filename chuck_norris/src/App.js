import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Components
import Header from './components/Header/Header'
import Main from './components/Main/Main'

// Actions
import getQuote from './actions/quote'

const App = () => {

    const dispatch = useDispatch()
    
    // Make a request for a quote from server
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