import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { getProducts } from './getProduct';

const HomeSearch = () => {

    const [categories, setCategories] = useState(['norte']);

    /* getProducts("Textiles"); */

    return (
        <>
        <AddCategory setCategories={ setCategories } />

        </>
    )
}

export default HomeSearch
