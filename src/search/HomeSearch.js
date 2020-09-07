import React, { useState } from 'react'

const HomeSearch = () => {

    const [categories, setCategories] = useState(['norte']);

    return (
        <>
        <AddCategory setCategories={ setCategories } />
        </>
    )
}

export default HomeSearch
