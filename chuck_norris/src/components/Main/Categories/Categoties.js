import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Components
import Category from './Category/Category'

import getCategories from '../../../actions/categories'

const Categories = () => {

    // Make a request for categories from server
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch( getCategories() )
    }, [dispatch])

    // Get array of categories from Resux
    const categoriesEnumeration = useSelector( (state) => state.categories )
    
    return (
        <div className="categories-wrapper">
            <h1 className="categories-title">Categories</h1>
            <div className="categories-names-container">
                {   
                    categoriesEnumeration.map(category => {
                        return (
                            <Category category={category} key={"category-" + category}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Categories