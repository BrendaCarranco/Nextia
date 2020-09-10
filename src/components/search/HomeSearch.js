import React, { useState } from 'react'
import { AddCategory } from './AddCategory';

const HomeSearch = () => {

    const [categories, setCategories] = useState(['norte']);

    return (
        <>
        <AddCategory setCategories={ setCategories } />

        </>
    )
}

export default HomeSearch
