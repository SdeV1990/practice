import React from 'react'
import { useDispatch } from 'react-redux'

import getQuote from '../../../../actions/quote'

const Category =({ category }) => {

    const dispatch = useDispatch()

    // Handle click - get quote by category
    const hansleClick = () => {
        dispatch( getQuote(category) )
    }

    return (
        <div className="category-name" onClick={hansleClick} >
            {category}
        </div>
    );
}

export default Category