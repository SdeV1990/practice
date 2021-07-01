import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Components
import Header from './components/Header/Header'
import Main from './components/Main/Main'

// Actions
import getJoke from './actions/jokes'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getJoke())
    }, [])

    return (
        <div className='wrapper'>
            <Header/>
            <Main/>
        </div>
    );
}

export default App