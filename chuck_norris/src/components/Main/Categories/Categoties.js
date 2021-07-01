import React from 'react'

// Components
import Category from './Category/Category'

const Categories = () => {

    // Array of categories
    const categoriesEnumeration = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel", "random"]

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